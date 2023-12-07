import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'hostels',
        loadChildren: () => import('./hostels/hostels.module').then(m => m.HostelsModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./message/message.module').then(m => m.MessageModule)
      },
      {
        path: 'patners',
        loadChildren: () => import('./patners/patners.module').then(m => m.PatnersModule)
      },
      {
        path: 'publicite',
        loadChildren: () => import('./publicite/publicite.module').then(m => m.PubliciteModule)
      },
      {
        path: 'zone',
        loadChildren: () => import('./zone/zone.module').then(m => m.ZoneModule)
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }