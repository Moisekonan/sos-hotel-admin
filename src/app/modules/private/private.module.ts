import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { ThemeModule } from 'src/app/@theme/theme.module';



@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ThemeModule
  ]
})
export class PrivateModule { }