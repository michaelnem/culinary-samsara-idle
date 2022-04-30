import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { max } from 'rxjs/operators';

@Component({
  selector: 'csi-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {

  @Input() max = 100;
  _value = 0;
  @Input() set value(value: number) {
    this._value = Math.max(0, Math.min(value, this.max));
  }
  @Input() label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
