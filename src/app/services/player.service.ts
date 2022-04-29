import { Injectable } from '@angular/core';
import { PlayerData } from '../interfaces/playerData';
import { JobsService } from './jobs.service';
import { AgeService } from './age.service';
import { SkillsService } from './skills.service';
import { SectionsEnum } from '../enums/sections.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  coins: number = 0;
  happiness: number = 1;
  rebirths: number = 0;

  playerSubject = new BehaviorSubject(
    {
      lifeSpan: this.ageService.lifespan,
      coins: this.coins,
      happiness: this.happiness,
      progression: {
        // jobs: this.jobsService.getProgression(),
      },
    });

  constructor(
    private ageService: AgeService,
    private jobsService: JobsService,
    private skillsService: SkillsService
  ) {

  }

  get player$(): Observable<PlayerData> {
    return this.playerSubject.asObservable();
  }

  /**
   * @description Set the player's data
   * @param {PlayerData} savedGame
   */
  setPlayer(savedGame: PlayerData) {
    // this.ageService.age = savedGame.age;
    this.ageService.lifespan = savedGame.lifeSpan;
    this.coins = savedGame.coins;
    this.happiness = savedGame.happiness;
  }

  /**
   * @description Main tick function for the player.
   * happens every X seconds (by gameService)
   * increments age, get earnings .... should do more
   */
  // tick() {
  //   this.ageService.increaseAge();
  //   this.getEarnings();
  // }

  /**
   * @description Increase the earnings for the player
   * based on the rebirth from jobs and skills
   */
  getEarnings() {
    this.coins += this.jobsService.getEarnings() * this.rebirths;
    // this.coins += this.skillsService.getEarnings() * this.rebirths;
  }

  /**
   * @description Upgrade the player's selected job or skill
   * @param {'jobs' | 'skills'} section
   * @param id
   */
  upgradeProgression(
    section: SectionsEnum,
    id: number
  ): void {
    //Should I validate the section?
    if (section !== SectionsEnum.JOBS && section !== SectionsEnum.SKILLS) {
      console.error('Invalid section');
      return;
    }
    //Maybe better than switch statement
    const progressionMap = new Map<string, any>([
      [SectionsEnum.JOBS, this.jobsService],
      [SectionsEnum.SKILLS, this.skillsService],
    ]);
    progressionMap.get(section).upgrade(id, this.coins);
  }
}
