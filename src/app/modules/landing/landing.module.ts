import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {LandingComponent} from './pages/landing/landing.component';
import {SharedModule} from '@app/shared/shared.module';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
  declarations: [LandingComponent, ProjectsComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule]
})
export class LandingModule {
}
