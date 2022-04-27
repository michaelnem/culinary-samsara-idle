import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenManagerService {

  activeScreen: string = 'jobs';

  constructor() { }

  changeScreen(screen: string) {
    this.activeScreen = screen;
  }
}
