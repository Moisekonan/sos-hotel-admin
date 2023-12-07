import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatnersComponent } from './components/patners/patners.component';

const routes: Routes = [
  { path: '', component: PatnersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class patnersRoutingModule { }
