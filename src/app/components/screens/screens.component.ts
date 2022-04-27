import { Component, OnInit } from '@angular/core';
import { ScreenManagerService } from '../../services/screen-manager.service';

@Component({
  selector: 'csi-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
})
export class ScreensComponent implements OnInit {
  constructor(private screensService: ScreenManagerService) {}

  ngOnInit(): void {}

  get activeScreen() {
    return this.screensService.activeScreen;
  }

  changeScreen(section: string) {
    this.screensService.changeScreen(section);
  }
}
