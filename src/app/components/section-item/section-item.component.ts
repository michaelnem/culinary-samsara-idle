import {Component, Input, OnInit} from '@angular/core';
import { JobProgression } from 'src/app/models/interfaces/job';
import {ProgressBarItem} from "../../models/interfaces/progress-bar-item";

@Component({
  selector: 'csi-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

  @Input() progressionDataItem?: JobProgression;
  @Input() progressBarItem?: ProgressBarItem;


  constructor() { }

  ngOnInit(): void {
  }

}
