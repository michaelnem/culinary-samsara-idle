import { Injectable } from '@angular/core';
import { PlayerData } from '../interfaces/playerData';
import {JobsService} from "./jobs.service";
import {AgeService} from "./age.service";

@Injectable({
  providedIn: 'root',
})
export class PlayerService implements PlayerData {
  age: { years: number; days: number } = { years: 0, days: 0 };
  coins: number = 0;
  happiness: number = 1;
  lifeSpan: number = 0;
  progression: { [key: string] : any[] } = {};
  rebirths: number = 0;

  constructor(
    private ageService: AgeService,
    private jobsService: JobsService,
  ) {}

  getPlayer(): PlayerData {
    return {
      age: this.ageService.age,
      lifeSpan: this.ageService.lifespan,
      coins: this.coins,
      happiness: this.happiness,
      progression: {
        jobs: this.jobsService.getProgression(),
      },
    };
  }

  setPlayer(savedGame: PlayerData) {
    this.ageService.setAge(savedGame.age);
    this.ageService.lifespan = savedGame.lifeSpan;
    this.coins = savedGame.coins;
    this.happiness = savedGame.happiness;
  }

  tick() {
    this.ageService.increaseAge();
    this.getEarnings();
  }

  getEarnings() {
    this.coins += (this.jobsService.getEarnings() * this.rebirths);
  }

  upgradeProgression(section: string, id: number) {
    this.jobsService.upgrade(id, this.coins);
  }

}
