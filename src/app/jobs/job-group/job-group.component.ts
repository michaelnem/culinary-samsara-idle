import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
