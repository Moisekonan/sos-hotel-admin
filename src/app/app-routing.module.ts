import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule) },
  { path: '', redirectTo:'/auth/login', pathMatch: 'full' },
  // { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'hostels', loadChildren: () => import('./modules/hostels/hostels.module').then(m => m.HostelsModule) },
  // { path: 'gallery', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },
  // { path: 'message', loadChildren: () => import('./modules/message/message.module').then(m => m.MessageModule) },
  // { path: 'patners', loadChildren: () => import('./modules/patners/patners.module').then(m => m.PatnersModule) },
  // { path: 'publicite', loadChildren: () => import('./modules/publicite/publicite.module').then(m => m.PubliciteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
