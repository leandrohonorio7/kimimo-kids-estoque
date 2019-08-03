import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produto} from '../../model/produto.model';
import {Action} from '@ngrx/store';
import {unselectProduto} from '../../store/actions/produtos.actions';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.scss']
})
export class ProdutoDetailComponent implements OnInit {

  produtoForm = this.fb.group(
    {
      id: [''],
      name: [''],
      value: [''],
      quantity: [''],
      // sizes: this.fb.group({
      //     size: [''],
      //   }
      // )
    }
  );

  @Input()
  set produto(produto: Produto) {
    this.produtoForm.patchValue(produto);
  }

  @Output()
  actionEmitter = new EventEmitter<Action>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  unselect(produto: Produto) {
    this.actionEmitter.emit(unselectProduto());
  }

}
