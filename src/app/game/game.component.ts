import { Component, OnInit } from '@angular/core';
import { JobsComponent } from '../jobs/jobs.component';
import { SettingsComponent } from '../settings/settings.component';
import { ShopComponent } from '../shop/shop.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'csi-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  list = [
    {
      label: 'jobs',
      component: JobsComponent
    },
    {
      label: 'skills',
      component: SkillsComponent
    },
    {
      label: 'shop',
      component: ShopComponent
    },
    {
      label: 'settings',
      component: SettingsComponent
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
