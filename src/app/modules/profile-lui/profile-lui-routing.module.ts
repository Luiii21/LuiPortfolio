import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LuiProfileComponent} from '@components/profile-lui/pages/lui-profile/lui-profile.component';
import {LuiPersonalComponent} from '@components/profile-lui/pages/lui-personal/lui-personal.component';
import {ProfessionalInfoComponent} from '@components/profile-lui/attributes/professional-info/professional-info.component';
import {ProfessionalTechComponent} from '@components/profile-lui/attributes/professional-tech/professional-tech.component';
import {ProfessionalProyectsComponent} from '@components/profile-lui/attributes/professional-proyects/professional-proyects.component';
import {ProfessionalExperienciesComponent} from '@components/profile-lui/attributes/professional-experiencies/professional-experiencies.component';
import {PersonalHobbiesComponent} from '@components/profile-lui/features/personal-hobbies/personal-hobbies.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profesional',
        component: LuiProfileComponent,
        children: [
          {
            path: 'informacion',
            component: ProfessionalInfoComponent
          },
          {
            path: 'tecnologias',
            component: ProfessionalTechComponent
          },
          {
            path: 'proyectos',
            component: ProfessionalProyectsComponent
          },
          {
            path: 'experiencias',
            component: ProfessionalExperienciesComponent
          },
          {
            path: '**',
            redirectTo: 'informacion'
          }
        ]
      },
      {
        path: 'personal',
        component: LuiPersonalComponent,
        children: [
          {
            path: 'hobbies',
            component: PersonalHobbiesComponent
          },
          {
            path: '**',
            redirectTo: 'hobbies'
          }
        ]
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
