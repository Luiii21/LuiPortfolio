import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {
  }

  routing = this.router;

  ngOnInit(): void {
    this.jquery();
  }

  jquery(): void {
    jQuery(document).ready(() => {

      jQuery('.btn-nav-item.menu').click(() => {
        jQuery('.lui-nav').toggleClass('show', 600);
      });

      jQuery('.profile-links li').click(() => {
        jQuery('.lui-nav').toggleClass('show', 600);
      });

    });
  }
}
