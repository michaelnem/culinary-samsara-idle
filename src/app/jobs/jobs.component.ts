import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { Observable } from 'rxjs';

import {
  STATIC_KITCHEN_JOBS,
  SectionInterface,
} from '../models/interfaces/section';
import { map } from 'rxjs/operators';
import { JobProgression } from '../models/interfaces/job';

@Component({
  selector: 'csi-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobGroups: SectionInterface[] = [STATIC_KITCHEN_JOBS];
  progressionData$?: Observable<Map<number, JobProgression>>;

  jobGroupsWithData$?: Observable<SectionInterface[]>;
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.progressionData$ = this.jobsService.progressionData$;

    //Pipe the data into the sections
    this.jobGroupsWithData$ = this.jobsService.progressionData$.pipe(
      map((progressionData) => {
        for (const jobGroup of this.jobGroups) {
          for (const job of jobGroup.progressBarItems) {
            job.data = progressionData.get(job.id);
          }
        }

        return this.jobGroups;
      })
    );
  }

  //Test to see the result of the pipe
  getSection(section: any): string {
    return JSON.stringify(section);
  }
}
