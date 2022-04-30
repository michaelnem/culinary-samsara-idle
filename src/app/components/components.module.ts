import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AgeService } from '../utils/services/age.service';
import { GameManagerService } from '../utils/services/game-manager.service';
import { PlayerService } from '../utils/services/player.service';
import { UtilsModule } from '../utils/utils.module';
import { ScreenManagerService } from './screens/screen-manager.service';
import { ScreensComponent } from './screens/screens.component';
import { SectionItemComponent } from './section-item/section-item.component';
import { StatsBarComponent } from './stats-bar/stats-bar.component';

@NgModule({
  declarations: [StatsBarComponent, ScreensComponent, SectionItemComponent],
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
  exports: [StatsBarComponent],
})
export class ComponentsModule {}
