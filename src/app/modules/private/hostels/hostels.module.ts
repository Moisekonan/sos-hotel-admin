import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostelsComponent } from './components/hostels/hostels.component';
import { hostelsRoutingModule } from './hostels-routing.module';



@NgModule({
  declarations: [
    HostelsComponent
  ],
  imports: [
    CommonModule,
    hostelsRoutingModule
  ]
})
export class HostelsModule { }
