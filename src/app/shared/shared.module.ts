import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedSpinnerComponent} from './components/shared-spinner/shared-spinner.component';
import { StepperComponent } from './components/stepper/stepper.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    SharedSpinnerComponent,
    StepperComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    SharedSpinnerComponent,
    StepperComponent
  ]
})
export class SharedModule { }
