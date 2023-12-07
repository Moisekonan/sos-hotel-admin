import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackTopComponent } from './components/back-top/back-top.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    BackTopComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class ThemeModule { }