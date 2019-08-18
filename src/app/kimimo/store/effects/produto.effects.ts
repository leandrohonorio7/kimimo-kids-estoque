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
          showSnackBar({message: `THe updated product "${action.produto.name}".`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Ops, something went wrong', config: {
            duration: 5000
          }
        })))
      )
    ),
  ));

  createProduto = createEffect(() => this.actions$.pipe(
    ofType(createProduto),
    exhaustMap((action) => from(this.firestore.doc(`produtos/${this.createId()}`).set({
      id: this.novoId,
      name: action.produto.name,
      value: action.produto.value,
      quantity: action.produto.quantity
    })).pipe(
      concatMap(() => from( [
        navigationTo({commands: ['core', 'layout', 'kimimo', 'produtos']}),
        showSnackBar({message: `Created new product`, config: {}})
      ])),
      catchError(() => of(showSnackBar({message: 'Ops, something went wrong', config: {
          duration: 5000
        }})))
    ))
    )
  );

  deleteProduto = createEffect(() => this.actions$.pipe(
    ofType(deleteProduto),
    exhaustMap((action) =>
      from(this.firestore.doc(`produtos/${action.id}`).delete()).pipe(
        concatMap(() => from([
          navigationTo({commands: ['core', 'layout', 'kimimo', 'produtos']}),
          showSnackBar({message: `Product removed`, config: {}})
        ])),
        catchError(() => of(showSnackBar({
          message: 'Ops, something went wrong',
          config: {duration: 5000}
        })))
      )
    ),
  ));

  constructor(private actions$: Actions, private firestore: AngularFirestore) {}

  novoId: string;
  private createId() {
    this.novoId = this.firestore.createId();
    return this.novoId;
  }
}
