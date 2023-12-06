import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PubliciteComponent } from './components/publicite/publicite.component';

const routes: Routes = [
  { path: '', component: PubliciteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class publiciteRoutingModule { }
