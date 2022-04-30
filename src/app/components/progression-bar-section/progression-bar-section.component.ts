import { Component, Input, OnInit } from '@angular/core';
import { SectionInterface } from '../../models/interfaces/section';
import { Observable } from 'rxjs';
import { JobProgression } from '../../models/interfaces/playerData';

@Component({
  selector: 'csi-progression-bar-section',
  templateUrl: './progression-bar-section.component.html',
  styleUrls: ['./progression-bar-section.component.scss'],
})
export class ProgressionBarSectionComponent implements OnInit {
  @Input() section?: SectionInterface;
  @Input() progressionData?: Map<number, JobProgression>;

  constructor() {}

  ngOnInit(): void {}

  getProgressionItemFromMap(
    map: Map<number, JobProgression>,
    jobId: number
  ): JobProgression | undefined {
    const job = map.get(jobId);
    const hasLevel = job && job.level;

    return hasLevel ? job : undefined;
  }
}
