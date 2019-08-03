import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Produto} from '../../model/produto.model';
import {Action, select, Store} from '@ngrx/store';
import {ProdutosStatus} from '../../store/reducers/produtos.reduce';
import {getSelectProdutos} from '../../store/selectors/produtos.selectors';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto$: Observable<Produto>;

  constructor(private store: Store<ProdutosStatus>) {  }

  ngOnInit() {
    this.produto$ = this.store.pipe(select(getSelectProdutos));
  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
