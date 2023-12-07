import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelsComponent } from './components/hostels/hostels.component';

const routes: Routes = [
  { path: '', component: HostelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class hostelsRoutingModule { }
