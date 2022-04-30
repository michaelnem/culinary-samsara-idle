import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    UtilsModule,
  ],
  exports: [JobsComponent]
})
export class JobsModule { }
