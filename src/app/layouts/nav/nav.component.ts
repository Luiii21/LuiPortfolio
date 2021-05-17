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
      jQuery('.toggle-menu').click(() => {
        jQuery('.nav-menu-container').toggleClass('show');
      });

      jQuery('#personal').click(() => {
        if (jQuery('#personal').parents('.links-dropdown').find('.links').hasClass('show')) {
          jQuery('#personal').parents('.links-dropdown').find('.links').removeClass('show');
        } else {
          jQuery('#personal').parents('.links-dropdown').find('.links').addClass('show');
        }
      });

      jQuery('#professional').click(() => {
        if (jQuery('#professional').parents('.links-dropdown').find('.links').hasClass('show')) {
          jQuery('#professional').parents('.links-dropdown').find('.links').removeClass('show');
        } else {
          jQuery('#professional').parents('.links-dropdown').find('.links').addClass('show');
        }
      });

      jQuery('.nav-link').click(() => {
        jQuery('.nav-menu-container').toggleClass('show');
      });
    });
  }

}
