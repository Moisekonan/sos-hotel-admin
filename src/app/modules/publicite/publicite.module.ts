import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubliciteComponent } from './components/publicite/publicite.component';
import { publiciteRoutingModule } from './publicite-routing.module';



@NgModule({
  declarations: [
    PubliciteComponent
  ],
  imports: [
    CommonModule,
    publiciteRoutingModule
  ]
})
export class PubliciteModule { }
