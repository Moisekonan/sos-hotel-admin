import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatnersComponent } from './components/patners/patners.component';
import { patnersRoutingModule } from './patners-routing.module';



@NgModule({
  declarations: [
    PatnersComponent
  ],
  imports: [
    CommonModule,
    patnersRoutingModule
  ]
})
export class PatnersModule { }
