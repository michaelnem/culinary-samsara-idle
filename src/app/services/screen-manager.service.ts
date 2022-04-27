import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenManagerService {

  activeScreen: string = 'jobs';

  changeScreen(screen: string) {
    this.activeScreen = screen;
  }
}