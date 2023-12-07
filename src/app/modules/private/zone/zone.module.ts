import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './components/zone/zone.component';
import { zoneRoutingModule } from './zone-routing.module';



@NgModule({
  declarations: [
    ZoneComponent
  ],
  imports: [
    CommonModule,
    zoneRoutingModule
  ]
})
export class ZoneModule { }
