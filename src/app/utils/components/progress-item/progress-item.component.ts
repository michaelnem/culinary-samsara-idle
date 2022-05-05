import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csi-progress-item',
  templateUrl: './progress-item.component.html',
  styleUrls: ['./progress-item.component.scss']
})
export class ProgressItemComponent implements OnInit {

  @Input() title = ''

  constructor() { }

  ngOnInit(): void {
  }

}
