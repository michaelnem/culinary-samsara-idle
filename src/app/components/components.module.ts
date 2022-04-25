import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StatsBarComponent } from './stats-bar/stats-bar.component';
import { JobsComponent } from './jobs/jobs.component';
import { ResearchComponent } from './research/research.component';
import { SkillsComponent } from './skills/skills.component';
import { ShopComponent } from './shop/shop.component';
import { SettingsComponent } from './settings/settings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    MainComponent,
    StatsBarComponent,
    JobsComponent,
    ResearchComponent,
    SkillsComponent,
    ShopComponent,
    SettingsComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
