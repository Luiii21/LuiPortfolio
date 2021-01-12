import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedSpinnerComponent} from './components/shared-spinner/shared-spinner.component';



@NgModule({
  declarations: [
    SharedSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedSpinnerComponent
  ]
})
export class SharedModule { }
