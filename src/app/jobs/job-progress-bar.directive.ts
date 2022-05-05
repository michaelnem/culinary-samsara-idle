import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { JobProgression } from '../models/interfaces/job';
import { ProgressBarComponent } from '../utils/components/progress-bar/progress-bar.component';
import { JobsService } from './jobs.service';

@Directive({
  selector: '[csiJobProgressBar]'
})
export class JobProgressBarDirective {

  @Input('csiJobProgressBar') jobProgression!: JobProgression;

  constructor(
    private jobsService: JobsService,
    private progressBarComponent: ProgressBarComponent,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.jobsService.activeJobProgression$.pipe(
      filter((jobProgression) => {
        return jobProgression.id === this.jobProgression.id;
      })
    ).subscribe({
      next: (jobProgression) => {
        this.jobProgression = jobProgression;
        this.progressBarComponent.value = this.jobProgression.xpEarned;
        this.progressBarComponent.max = this.jobProgression.xpToNextLevel;
        this.cdRef.markForCheck();
      },
    });
  }
}
