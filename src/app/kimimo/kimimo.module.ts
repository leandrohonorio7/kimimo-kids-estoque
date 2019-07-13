import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KimimoRoutingModule } from './kimimo-routing.module';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { ProdutoComponent } from './containers/produto/produto.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import {SharedModule} from '../core/shared/shared.module';


@NgModule({
  declarations: [ProdutoListComponent, ProdutoDetailComponent, ProdutoComponent, ProdutosComponent],
  imports: [
    CommonModule,
    KimimoRoutingModule,
    SharedModule,
  ]
})
export class KimimoModule { }
