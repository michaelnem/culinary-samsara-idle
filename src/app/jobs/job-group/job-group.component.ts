import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarItem } from 'src/app/models/interfaces/progress-bar-item';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'csi-job-group',
  templateUrl: './job-group.component.html',
  styleUrls: ['./job-group.component.scss']
})
export class JobGroupComponent implements OnInit {

  @Input() jobsGroupTitle = '';
  @Input() jobs: any[] = [];
  displayedJobInfo: any[] = ['data', 'level', 'xpToNextLevel'];
  dynamicDisplayedJobInfo: any[] = this.displayedJobInfo.slice(1);

  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
  }

  onJobClick(job: ProgressBarItem) {
    if(!job?.data) {
      return;
    }
    
    this.jobService.activeJobProgression = job.data;
  }

}
