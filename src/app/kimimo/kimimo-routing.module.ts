import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KimimoListComponent} from './containers/kimimo-list/kimimo-list.component';
import {KimimoDetailComponent} from './containers/kimimo-detail/kimimo-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: KimimoListComponent},
  {path: 'detail', component: KimimoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KimimoRoutingModule { }
