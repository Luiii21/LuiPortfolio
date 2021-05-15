import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LuiProfileComponent} from '@components/profile-lui/pages/lui-profile/lui-profile.component';
import {LuiPersonalComponent} from '@components/profile-lui/pages/lui-personal/lui-personal.component';
import {ProfessionalInfoComponent} from '@components/profile-lui/attributes/professional-info/professional-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profesional',
        component: LuiProfileComponent,
        children: [
          {
            path: 'información',
            component: ProfessionalInfoComponent
          },
          {
            path: '**',
            redirectTo: 'información'
          }
        ]
      },
      {
        path: 'personal',
        component: LuiPersonalComponent,
      },
      {
        path: '**',
        redirectTo: 'profesional'
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'profesional'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileLuiRoutingModule {
}
