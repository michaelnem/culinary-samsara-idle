import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { Observable } from 'rxjs';
import { JobProgression } from '../models/interfaces/playerData';
import {
  STATIC_KITCHEN_JOBS,
  SectionInterface,
} from '../models/interfaces/section';
import {map} from "rxjs/operators";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'csi-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  
  jobGroups: SectionInterface[] = [STATIC_KITCHEN_JOBS];
  progressionData$?: Observable<Map<number, JobProgression>>;

  sectionsWithData$?: Observable<SectionInterface[]>;
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.progressionData$ = this.jobsService.progressionData$

    //Pipe the data into the sections
    this.sectionsWithData$ = this.jobsService.progressionData$.pipe(
      map((progressionData) => {
        for (const jobGroup of this.jobGroups) {
          for (const job of jobGroup.progressBarItems) {
            job.data = progressionData.get(job.id);
          }
        }
        console.log(this.jobGroups);
        
        return this.jobGroups;
      })
    );
  }

  //Test to see the result of the pipe
  getSection(section: any): string {
    console.log(section);
    return JSON.stringify(section);
  }
}
