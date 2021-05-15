import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {LandingComponent} from '@components/landing/pages/landing/landing.component';
import {ContentLuiComponent} from '@app/layouts/content-lui/content-lui.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'jeanlui',
    component: ContentLuiComponent,
    loadChildren: () =>
      import('./modules/profile-lui/profile-lui.module').then((m) => m.ProfileLuiModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
