import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produto} from '../../model/produto.model';
import {Action} from '@ngrx/store';
import {createProduto, deleteProduto, unselectProduto, updateProduto} from '../../store/actions/produtos.actions';
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
    if (produto) {
      this.produtoForm.patchValue(produto);
    }
  }

  @Output()
  actionEmitter = new EventEmitter<Action>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  unselect() {
    this.actionEmitter.emit(unselectProduto());
  }

  salvar() {
      this.actionEmitter.emit(createProduto({produto: this.produtoForm.value}));
  }
  update() {
    this.actionEmitter.emit(updateProduto({produto: this.produtoForm.value}));
  }

  delete() {
    this.actionEmitter.emit(deleteProduto({id: this.produtoForm.get('id').value}));
  }

}
