import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'external-api',
    loadChildren: () =>
      import('./features/external-api/external-api.module').then(
        (m) => m.ExternalApiModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
