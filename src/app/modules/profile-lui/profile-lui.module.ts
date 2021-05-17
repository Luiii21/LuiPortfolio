import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileLuiRoutingModule } from './profile-lui-routing.module';
import { LuiProfileComponent } from './pages/lui-profile/lui-profile.component';
import { LuiPersonalComponent } from './pages/lui-personal/lui-personal.component';
import {SharedModule} from '@app/shared/shared.module';
import { ProfessionalInfoComponent } from './attributes/professional-info/professional-info.component';
import { ProfessionalTechComponent } from './attributes/professional-tech/professional-tech.component';
import { ProfessionalProyectsComponent } from './attributes/professional-proyects/professional-proyects.component';
import { ProfessionalExperienciesComponent } from './attributes/professional-experiencies/professional-experiencies.component';
import { PersonalHobbiesComponent } from './features/personal-hobbies/personal-hobbies.component';


@NgModule({
  declarations: [LuiProfileComponent, LuiPersonalComponent, ProfessionalInfoComponent, ProfessionalTechComponent, ProfessionalProyectsComponent, ProfessionalExperienciesComponent, PersonalHobbiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileLuiRoutingModule
  ]
})
export class ProfileLuiModule { }
