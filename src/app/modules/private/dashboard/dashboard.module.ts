import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from 'src/app/@theme/components/sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, dashboardRoutingModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
