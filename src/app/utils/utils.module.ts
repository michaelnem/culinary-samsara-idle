import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressionBarSectionComponent } from './components/progression-bar-section/progression-bar-section.component';

const exportedComponents = [
  ProgressBarComponent,
  ProgressionBarSectionComponent
];

@NgModule({
  declarations: [
    ...exportedComponents
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    ...exportedComponents
  ]
})
export class UtilsModule { }
