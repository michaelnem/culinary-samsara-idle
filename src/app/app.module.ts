import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GameStateComponent } from './game/game-state/game-state.component';
import { GameComponent } from './game/game.component';
import { JobGroupComponent } from './jobs/job-group/job-group.component';
import { JobProgressBarDirective } from './jobs/job-progress-bar.directive';
import { JobsComponent } from './jobs/jobs.component';
import { PlayerNetworkComponent } from './player/player-network/player-network.component';
import { PlayerProgressComponent } from './player/player-progress/player-progress.component';
import { PlayerStatesComponent } from './player/player-states/player-states.component';
import { PlayerComponent } from './player/player.component';
import { SettingsComponent } from './settings/settings.component';
import { ShopComponent } from './shop/shop.component';
import { SkillsComponent } from './skills/skills.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    JobsComponent,
    JobGroupComponent,
    SkillsComponent,
    ShopComponent,
    SettingsComponent,
    JobGroupComponent,
    JobProgressBarDirective,
    GameStateComponent,
    PlayerComponent,
    PlayerNetworkComponent,
    PlayerProgressComponent,
    PlayerStatesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    ComponentsModule,
    UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
