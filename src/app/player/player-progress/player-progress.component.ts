import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs/jobs.service';
import { JobProgression } from 'src/app/models/interfaces/job';
import {STATIC_KITCHEN_JOBS} from '../../models/interfaces/section';

@Component({
  selector: 'csi-player-progress',
  templateUrl: './player-progress.component.html',
  styleUrls: ['./player-progress.component.scss']
})
export class PlayerProgressComponent implements OnInit {
  activeJobName = '';
  activeJobProgression!: JobProgression;
  constructor(public jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.activeJobProgression$.subscribe({
      next: (activeJobProgression) => {
        this.activeJobProgression = activeJobProgression;
        const jobData = this.jobsService.jobs.find((job) => job.id === this.activeJobProgression.id);
        this.activeJobName = jobData?.name || '';
      }
    })
    
  }

}
