import { Injectable } from '@angular/core';
import { Upgradable } from '../interfaces/upgradable.interface';
import { Earnable } from '../interfaces/earnable.interface';

@Injectable({
  providedIn: 'root',
})
export class JobsService implements Upgradable, Earnable {
  jobs: any[] = [];

  constructor() {}

  /**
   * @description loop through the jobs array and return the accumulated value
   * @returns {number}
   */
  getEarnings(): number {
    const earnings = this.jobs.reduce((acc, curr) => {
      return acc + curr.level * curr.basePay;
    }, 0) as number;
    return earnings;
  }

  /**
   * @description upgrade a job's level by 1 after checking if the player has enough money
   * @param {number} id
   * @param {number} playerCoins
   */
  upgrade(id: number, playerCoins: number): void {
    const job = this.jobs.find((job) => job.id === id);
    if (!job) {
      console.error('Job not found');
      return;
    }
    const cost = job.level * job.basePay;
    if (playerCoins < cost) {
      return;
    }
    job.level++;
  }

  /**
   * @description get the item cost by id
   * @param id
   * @returns {number | undefined} the item cost
   */
  getUpgradeCost(id: number): number | undefined {
    const job = this.jobs.find((job) => job.id === id);
    return job.level * job.basePay || undefined;
  }

  getProgression() {
    return [];
  }

  /**
   * @description loop through progression array,
   * find the item with the matching id,
   * and change the item's level
   * @param progression
   */
  setProgression(progression: any[]) {
    return;
  }
}
