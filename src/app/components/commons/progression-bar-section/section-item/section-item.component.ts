import {Component, Input, OnInit} from '@angular/core';
import {ProgressBarItem} from "../../../../interfaces/progress-bar-item";
import {JobProgression} from "../../../../interfaces/playerData";

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
