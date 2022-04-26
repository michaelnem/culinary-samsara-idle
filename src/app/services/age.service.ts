import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgeService {
  age: { days: number; years: number } = { days: 0, years: 0 };
  lifespan: number = 70;

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

  setAge(age: { days: number, years: number }) {
    this.age = age;
  }

  resetAge() {
    this.age = { days: 0, years: 0 };
  }
}
