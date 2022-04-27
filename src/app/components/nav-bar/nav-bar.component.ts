import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'csi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  leftSections = [
    {
      text: 'Jobs',
      link: 'jobs',
    },
    {
      text: 'Skills',
      link: 'skills',
    },
    {
      text: 'Shop',
      link: 'shop',
    },
  ];

  rightSections = [
    {
      text: 'Settings',
      link: 'settings',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
