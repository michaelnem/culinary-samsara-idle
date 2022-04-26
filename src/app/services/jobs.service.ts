import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs: any[] = [];

  constructor() {}

  getEarnings(): number {
    const earnings = this.jobs.reduce((acc, curr) => {
      return acc + curr.level * curr.basePay;
    }, 0) as number;
    return earnings;
  }

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

  getUpgradeCost(id: number): number | undefined {
    const job = this.jobs.find((job) => job.id === id);
    return job.level * job.basePay || undefined;
  }

  getProgression() {
    return [];
  }
}
