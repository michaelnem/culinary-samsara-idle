import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScreenManagerService } from './screen-manager.service';

@Component({
  selector: 'csi-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ScreensComponent implements OnInit {
  constructor(public screensService: ScreenManagerService) {}

  ngOnInit(): void {}

  changeScreen(section: string) {
    this.screensService.changeScreen(section);
  }
}
