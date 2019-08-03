import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produto} from '../../model/produto.model';
import {Action} from '@ngrx/store';
import {selectProduto} from '../../store/actions/produtos.actions';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  @Input()
  produtos: Produto[];

  @Output()
  actionEmitter = new EventEmitter<Action>();
  constructor() {
  }

  ngOnInit() {
  }

  select(produto: Produto){
    this.actionEmitter.emit(selectProduto({produto}));
  }
}
