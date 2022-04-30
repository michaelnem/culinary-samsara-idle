import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { JobsComponent } from '../jobs/jobs.component';
import { SkillsComponent } from '../skills/skills.component';
import { ShopComponent } from '../shop/shop.component';
import { SettingsComponent } from '../settings/settings.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { NavBarItemComponent } from './nav-bar/nav-bar-item/nav-bar-item.component';
import { MatButtonModule } from '@angular/material/button';
import { AgeService } from '../utils/services/age.service';
import { GameManagerService } from '../utils/services/game-manager.service';
import { PlayerService } from '../utils/services/player.service';

import { MatIconModule } from '@angular/material/icon';
import { UtilsModule } from '../utils/utils.module';
import { ProgressionBarSectionComponent } from './progression-bar-section/progression-bar-section.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { StatsBarComponent } from './stats-bar/stats-bar.component';
import { ScreensComponent } from './screens/screens.component';
import { ScreenManagerService } from './screens/screen-manager.service';

@NgModule({
  declarations: [
    MainComponent,
    StatsBarComponent,
    JobsComponent,
    SkillsComponent,
    ShopComponent,
    SettingsComponent,
    NavBarComponent,
    ScreensComponent,
    NavBarItemComponent,
    ProgressionBarSectionComponent,
    SectionItemComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    UtilsModule,
  ],
  providers: [
    PlayerService,
    ScreenManagerService,
    AgeService,
    GameManagerService,
  ],
  exports: [MainComponent],
})
export class ComponentsModule {}
