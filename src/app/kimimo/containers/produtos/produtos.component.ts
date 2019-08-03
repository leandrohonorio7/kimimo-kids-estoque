import { Component, OnInit } from '@angular/core';
import {KimimoState} from '../../store/reducers/global.reducer';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Produto} from '../../model/produto.model';
import {getAllProdutos} from '../../store/selectors/produtos.selectors';
import {ProdutosStatus} from '../../store/reducers/produtos.reduce';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;

  constructor(private store: Store<ProdutosStatus>) {  }

  ngOnInit() {
    this.produtos$ = this.store.pipe(select(getAllProdutos));
  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}

