import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './containers/layout/layout.component';
import {HomeComponent} from './containers/home/home.component';
import {LoginComponent} from './containers/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = redirectUnauthorizedTo(['core', 'layout', 'kimimo', 'login'])

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout' },
  {path: 'layout', component: LayoutComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'login' },
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'kimimo', canLoad: [AuthGuard], loadChildren:
          () => import('../kimimo/kimimo.module').then(mod => mod.KimimoModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }
