import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csi-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  private readonly DEFAULT_MAX_VALUE = 100;

  @Input() label = '';

  _max = this.DEFAULT_MAX_VALUE;
  @Input() set max(max: number | undefined) {
    this._max = Math.max(0, max || this.DEFAULT_MAX_VALUE);
    this.value = this._value;
  }

  _value = 0;
  @Input() set value(value: number | undefined) {
    this._value = Math.max(0, Math.min(value || 0, this._max || 100));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
