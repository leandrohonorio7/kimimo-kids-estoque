import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KimimoRoutingModule } from './kimimo-routing.module';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { ProdutoComponent } from './containers/produto/produto.component';
import { ProdutosComponent } from './containers/produtos/produtos.component';
import {SharedModule} from '../core/shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {produtoReducer} from './store/reducers/feature.reducer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {ProdutoEffects} from './store/effects/produto.effects';


@NgModule({
  declarations: [ProdutoListComponent, ProdutoDetailComponent, ProdutoComponent, ProdutosComponent],
  imports: [
    CommonModule,
    KimimoRoutingModule,
    SharedModule,
    StoreModule.forFeature('produto', produtoReducer),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ProdutoEffects]),
  ]
})
export class KimimoModule { }
