import { Injectable } from '@angular/core';
import { PlayerData } from '../interfaces/playerData';
import {SectionInterface} from "../interfaces/section";
import {JOB_LIST} from "../constants/jobs.const";

@Injectable({
  providedIn: 'root',
})
export class PlayerService implements PlayerData {
  age: { years: number; days: number } = { years: 0, days: 0 };
  coins: number = 0;
  happiness: number = 1;
  lifeSpan: number = 0;
  progression = {};

  constructor() {}

  setPlayer(savedGame: PlayerData) {
    this.age = savedGame.age;
    this.coins = savedGame.coins;
    this.happiness = savedGame.happiness;
    this.lifeSpan = savedGame.lifeSpan;
  }
}
