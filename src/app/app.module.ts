import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GameComponent } from './game/game.component';
import { JobGroupComponent } from './jobs/job-group/job-group.component';
import { JobProgressBarDirective } from './jobs/job-progress-bar.directive';
import { JobsComponent } from './jobs/jobs.component';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    ComponentsModule,
    UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
