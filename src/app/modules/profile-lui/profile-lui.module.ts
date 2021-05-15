import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileLuiRoutingModule } from './profile-lui-routing.module';
import { LuiProfileComponent } from './pages/lui-profile/lui-profile.component';
import { LuiPersonalComponent } from './pages/lui-personal/lui-personal.component';
import {SharedModule} from '@app/shared/shared.module';
import { ProfessionalInfoComponent } from './attributes/professional-info/professional-info.component';


@NgModule({
  declarations: [LuiProfileComponent, LuiPersonalComponent, ProfessionalInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileLuiRoutingModule
  ]
})
export class ProfileLuiModule { }
