import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgeService {
  age: { days: number; years: number } = { days: 0, years: 0 };
  lifespan: number = 70;

  /**
   * @description validate age is not bigger than lifespan
   * increase age by 1 day, if days are equal 365,
   * sets days to 0 and increase years by 1
   */
  increaseAge() {
    if (this.age.years >= this.lifespan) {
      return;
    }

    this.age.days++;

    if (this.age.days >= 365) {
      this.age.days = 0;
      this.age.years++;
    }
  }

  /**
   * @description reset age to 0
   * for rebirths
   */
  resetAge() {
    this.age = { days: 0, years: 0 };
  }
}
