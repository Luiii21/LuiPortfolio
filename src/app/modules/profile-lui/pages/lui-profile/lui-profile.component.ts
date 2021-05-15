import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lui-profile',
  templateUrl: './lui-profile.component.html',
  styleUrls: ['./lui-profile.component.scss']
})
export class LuiProfileComponent implements OnInit {
  attributes = [
    {id: 0, title: 'Información', url: 'informacion'},
    {id: 1, title: 'Tecnologias', url: 'tecnologias'},
    {id: 2, title: 'Proyectos', url: 'proyectos'},
    {id: 3, title: 'Experiencias', url: 'experiencias'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
