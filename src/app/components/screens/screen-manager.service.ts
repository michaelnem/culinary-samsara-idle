import { Injectable, NgZone } from '@angular/core';

export type ScreenType = 'jobs' | 'skills' | 'shop' | 'settings';

@Injectable({
  providedIn: 'root'
})
export class ScreenManagerService {

  activeScreen: ScreenType = 'jobs';

  changeScreen(screen: ScreenType) {
    this.activeScreen = screen;
  }
}