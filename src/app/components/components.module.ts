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
import { MatCardModule } from '@angular/material/card';
import { ScreensComponent } from './screens/screens.component';
import { NavBarItemComponent } from './nav-bar/nav-bar-item/nav-bar-item.component';
import { MatButtonModule } from '@angular/material/button';
import { ScreenManagerService } from '../services/screen-manager.service';

@NgModule({
  declarations: [
    MainComponent,
    StatsBarComponent,
    JobsComponent,
    ResearchComponent,
    SkillsComponent,
    ShopComponent,
    SettingsComponent,
    NavBarComponent,
    ScreensComponent,
    NavBarItemComponent,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  providers: [ScreenManagerService],
  exports: [MainComponent],
})
export class ComponentsModule {}
