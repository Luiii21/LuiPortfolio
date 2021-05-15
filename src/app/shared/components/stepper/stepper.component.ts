import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() listAttributes: any;
  activated: boolean;
  attributeSelected: number;

  constructor() {
  }

  ngOnInit(): void {
    this.activated = true;
    this.attributeSelected = 0;
  }

  activatedAttribute(trigger: boolean, id: number): void {
    this.activated = trigger;
    this.attributeSelected = id;
  }
}
