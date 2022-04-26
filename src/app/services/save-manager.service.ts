import { Injectable } from '@angular/core';
import {PlayerData} from "../interfaces/playerData";

@Injectable({
  providedIn: 'root'
})
export class SaveManagerService {

  constructor() { }

  loadGame(): PlayerData | null {
    const playerData = localStorage.getItem('playerData');
    if (!playerData) {
      return null;
    }
    return JSON.parse(playerData);
  }

  saveGame(player: PlayerData) {

  }
}
