import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './containers/layout/layout.component';
import {HomeComponent} from './containers/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout' },
  {path: 'layout', component: LayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home' },
      {path: 'home', component: HomeComponent},
      {path: 'kimimo', loadChildren:
          () => import('../kimimo/kimimo.module').then(mod => mod.KimimoModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }
