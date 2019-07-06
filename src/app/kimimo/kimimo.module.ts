import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KimimoRoutingModule } from './kimimo-routing.module';
import { KimimoListComponent } from './containers/kimimo-list/kimimo-list.component';
import { KimimoDetailComponent } from './containers/kimimo-detail/kimimo-detail.component';


@NgModule({
  declarations: [KimimoListComponent, KimimoDetailComponent],
  imports: [
    CommonModule,
    KimimoRoutingModule
  ]
})
export class KimimoModule { }
