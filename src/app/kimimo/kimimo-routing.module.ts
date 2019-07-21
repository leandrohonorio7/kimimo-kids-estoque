import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from './containers/produtos/produtos.component';
import {ProdutoComponent} from './containers/produto/produto.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'produtos'},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produto', component: ProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KimimoRoutingModule { }
