import { Injectable } from '@angular/core';
import { Upgradable } from '../interfaces/upgradable.interface';
import { Earnable } from '../interfaces/earnable.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobProgression } from '../interfaces/playerData';
import { ProgressBarItem } from '../interfaces/progress-bar-item';

@Injectable({
  providedIn: 'root',
})
export class JobsService implements Upgradable, Earnable {

  jobs: ProgressBarItem[] = [];
  private _progressionData = new BehaviorSubject<Map<number, JobProgression>>(
    this._setInitValues()
  );

  constructor() {}

  /**
   * Create initial map of job progression
   */
  private _setInitValues(): Map<number, JobProgression> {
    const map = new Map<number, JobProgression>();
    this.jobs.forEach((job) => {
      map.set(job.id, {
        id: job.id,
        xpEarned: 0,
        level: 0,
        xpToNextLevel: job.baseXpPerLevel,
      });
    });
    return map;
  }

  get progressionData$(): Observable<Map<number, JobProgression>> {
    return this._progressionData.asObservable();
  }

  /**
   * @description
   * This method is used to update A job.
   * @param {JobProgression} job The id of the job to update.
   */
  set progressionData(job: JobProgression) {
    const jobId = job.id;
    const jobProgression = this._progressionData.getValue();
    jobProgression.set(jobId, job);
    this._progressionData.next(jobProgression);
  }

  /**
   * @description
   * This method is used to update an array of jobs.
   * @param {JobProgression} jobs The array of jobs to update.
   */
  set jobsProgression(jobs: JobProgression[]) {
    const jobProgression = this._progressionData.getValue();
    jobs.forEach((job) => {
      jobProgression.set(job.id, job);
    });
    this._progressionData.next(jobProgression);
  }

  /**
   * @description loop through the jobs array and return the accumulated value
   * @returns {number}
   */
  getEarnings(): number {
    const jobProgression = this._progressionData.getValue();
    const earnings = Array.from(jobProgression.values()).reduce((acc, curr) => {
      return acc + curr.level * curr.xpToNextLevel;
    }, 0) as number;
    return earnings;
  }

  /**
   * @description upgrade a job's level by 1 after checking if the player has enough money
   * @param {number} id
   * @param {number} playerCoins
   */
  upgrade(id: number, playerCoins: number): void {
    try {
      const baseCost = this.getBaseUpgradeCostById(id);
      const job = this.getById(id);
      const cost = job.level * baseCost;
      if (playerCoins < cost) {
        return;
      }
      job.level++;
      this.progressionData = job;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  /**
   * @description get job's dynamic data by id
   * @param {number} id
   * @returns {JobProgression}
   * @throws {Error} if job is not found
   */
  getById(id: number): JobProgression {
    const jobs = this._progressionData.getValue();
    const job = jobs.get(id);
    if (!job) {
      throw new Error('Job not found');
    }
    return job;
  }

  /**
   * @description get the item cost by id
   * @param id
   * @returns {number} the item cost
   * @throws {Error} if job is not found
   */
  getUpgradeCostById(id: number): number {
    try {
      const baseCost = this.getBaseUpgradeCostById(id);
      const job = this.getById(id);
      return job.level * baseCost;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description get the item base cost by id from static data
   * @param id
   * @returns {number} the item base cost
   * @throws {Error} if the item is not found
   */
  getBaseUpgradeCostById(id: number): number {
    const job = this.jobs.find((job) => job.id === id);
    if (!job) {
      throw new Error('Job not found');
    }
    return job.baseCost;
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
