import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

const exportedComponents = [
  ProgressBarComponent
];

@NgModule({
  declarations: [
    ...exportedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...exportedComponents
  ]
})
export class UtilsModule { }
