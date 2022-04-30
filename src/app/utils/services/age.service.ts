import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameManagerService } from './game-manager.service';

export interface Age { days: number; years: number }

@Injectable({
  providedIn: 'root',
})
export class AgeService {

  ageSubject = new BehaviorSubject<Age>({ days: 0, years: 0 });

  lifespan: number = 70;

  constructor(private gameManagerService: GameManagerService) {
    this.gameManagerService.tick$.subscribe(() => {
      this.increaseAge();
    });
  }

  /**
   * @description validate age is not bigger than lifespan
   * increase age by 1 day, if days are equal 365,
   * sets days to 0 and increase years by 1
   */
  increaseAge() {
    const age = this.ageSubject.getValue();
    
    if (age.years >= this.lifespan) {
      return;
    }

    age.days++;

    if (age.days >= 365) {
      age.days = 0;
      age.years++;
    }
    this.age = age;
  }

  /**
   * @description reset age to 0
   * for rebirths
   */
  resetAge() {
    this.age = { days: 0, years: 0 };
  }

  set age(newAge: Age) {
    this.ageSubject.next(newAge)
  }

  get age$() {
    return this.ageSubject.asObservable();
  }
}
