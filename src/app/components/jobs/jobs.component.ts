import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Observable } from 'rxjs';
import { JobProgression } from '../../interfaces/playerData';
import {
  STATIC_KITCHEN_JOBS,
  SectionInterface,
} from '../../interfaces/section';
import {map} from "rxjs/operators";

@Component({
  selector: 'csi-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  sections: SectionInterface[] = [STATIC_KITCHEN_JOBS];
  progressionData$?: Observable<Map<number, JobProgression>>;

  sectionsWithData$?: Observable<SectionInterface[]>;
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.progressionData$ = this.jobsService.progressionData$

    //Pipe the data into the sections
    this.sectionsWithData$ = this.jobsService.progressionData$.pipe(
      map((progressionData) => {
        for (const section of this.sections) {
          for (const job of section.progressBarItems) {
            job.data = progressionData.get(job.id);
          }
        }
        return this.sections;
      })
    );
  }

  //Test to see the result of the pipe
  getSection(section: any): string {
    console.log(section);
    return JSON.stringify(section);
  }
}
