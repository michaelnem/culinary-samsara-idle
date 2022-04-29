import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Observable } from 'rxjs';
import { JobProgression } from '../../interfaces/playerData';
import {
  STATIC_KITCHEN_JOBS,
  SectionInterface,
} from '../../interfaces/section';

@Component({
  selector: 'csi-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  sections: SectionInterface[] = [STATIC_KITCHEN_JOBS];
  progressionData$?: Observable<Map<number, JobProgression>>;

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.progressionData$ = this.jobsService.progressionData$;
  }
}
