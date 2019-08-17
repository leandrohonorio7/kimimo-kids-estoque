import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Produto} from '../../model/produto.model';
import {createProduto, deleteProduto, updateProduto, updateProdutoList} from '../actions/produtos.actions';
import {catchError, concatMap, exhaustMap, map, switchMap} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {navigationTo} from '../../../store/actions/app.actions';
import {showSnackBar} from '../../../core/store/actions/core.actions';

@Injectable()
export class ProdutoEffects {

    updateProdutoList$ = createEffect( () =>
      this.firestore.collection<Produto>('produtos').valueChanges().pipe(
        map( produtos => updateProdutoList({produtos}))
      ));

  updateProduto = createEffect( () => this.actions$.pipe(
    ofType(updateProduto),
    exhaustMap(action =>
      from(this.firestore.doc(`produtos/${action.produto.id}`).set(action.produto)).pipe(
        concatMap( () => from( [
          navigationTo( {commands: ['core', 'layout', 'kimimo', 'produtos']}),
          showSnackBar({message: `O item: "${action.produto.name}" foi atualizado.`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Ops, alguma coisa deu errado.', config: {
            duration: 5000
          }
        })))
      )
    ),
  ));

  createBug$ = createEffect(() => this.actions$.pipe(
    ofType(createProduto),
    exhaustMap((action) => {
      const id = this.firestore.createId();
      return from(this.firestore.doc(`bugs/${id}`).set({...action.produto, id})).pipe(
        concatMap(() => from([
          navigationTo({commands: ['core', 'layout', 'kimimo', 'produtos']}),
          showSnackBar({message: `${action.produto.name} atualizado`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Deu ruim',
          config: {duration: 5000}
        })))
      )
    }),
  ));

  deleteBug$ = createEffect(() => this.actions$.pipe(
    ofType(deleteProduto),
    exhaustMap((action) =>
      from(this.firestore.doc(`produtos/${action.id}`).delete()).pipe(
        concatMap(() => from([
          navigationTo({commands: ['core', 'layout', 'insects']}),
          showSnackBar({message: `Inseto deletado`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Deu ruim',
          config: {duration: 5000}
        })))
      )
    ),
  ));

  constructor(private actions$: Actions, private firestore: AngularFirestore) {}
}
