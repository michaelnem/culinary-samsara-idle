import { Injectable } from '@angular/core';
import { SectionInterface } from '../interfaces/section';
import { JOB_LIST } from '../constants/jobs.const';
import { SaveManagerService } from './save-manager.service';
import { PlayerService } from './player.service';
import {PlayerData} from "../interfaces/playerData";

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  defaultJobs: SectionInterface[] = JOB_LIST;
  data = {};

  constructor(
    private saveManagerService: SaveManagerService,
    private playerService: PlayerService
  ) {}

  loadGame() {
    const savedGame = this.saveManagerService.loadGame();
    if (!savedGame) {
      return;
    }
    this.playerService.setPlayer(savedGame as PlayerData);
  }
}
