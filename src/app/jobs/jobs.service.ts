import { Injectable } from '@angular/core';
import { Upgradable } from '../models/interfaces/upgradable.interface';
import { Earnable } from '../models/interfaces/earnable.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProgressBarItem } from '../models/interfaces/progress-bar-item';
import { STATIC_KITCHEN_JOBS } from '../models/interfaces/section';
import { GameManagerService } from '../utils/services/game-manager.service';
import { JobProgression, NO_JOB } from '../models/interfaces/job';

@Injectable({
  providedIn: 'root',
})
export class JobsService implements Upgradable, Earnable {
  jobs: ProgressBarItem[] = STATIC_KITCHEN_JOBS.progressBarItems;
  readonly LEVEL_UP_MULTIPLIER = 3;

  private _activeJobProgressionSubject = new BehaviorSubject<JobProgression>(
    NO_JOB
  );
  private _progressionData = new BehaviorSubject<Map<number, JobProgression>>(
    this._setInitValues()
  );

  constructor(private gameManagerService: GameManagerService) {
    this.gameManagerService.tick$.subscribe({
      next: this.updateActiveJob,
    });
  }

  /**
   * Create initial map of job progression
   */
  private _setInitValues(): Map<number, JobProgression> {
    const map = new Map<number, JobProgression>();
    let hasActive = false;
    this.jobs.forEach(({ id, baseXpPerLevel }) => {
      const jobProgression = {
        id,
        xpEarned: 0,
        level: 1, //TODO: depends on env, if dev, set to 1 else 0
        xpToNextLevel: baseXpPerLevel * 10,
        xpPerTick: baseXpPerLevel,
      };
      map.set(id, jobProgression);
      if (!hasActive) {
        this.activeJobProgression = jobProgression;
        hasActive = true;
      }
    });

    return map;
  }

  set activeJobProgression(jobProgression: JobProgression) {
    this._activeJobProgressionSubject.next(jobProgression);
  }

  get activeJobProgression(): JobProgression {
    return this._activeJobProgressionSubject.getValue();
  }

  get activeJobProgression$(): Observable<JobProgression> {
    return this._activeJobProgressionSubject.asObservable();
  }

  set progressionData(progressions: Map<number, JobProgression>) {
    this._progressionData.next(progressions);
    this.activeJobProgression = this.progressionData.get(this.activeJobProgression.id) || this.activeJobProgression;
  }

  get progressionData$(): Observable<Map<number, JobProgression>> {
    return this._progressionData.asObservable();
  }

  get progressionData(): Map<number, JobProgression> {
    return this._progressionData.getValue();
  }

  set jobsProgression(jobs: JobProgression[]) {
    const jobProgression = this.progressionData;
    jobs.forEach((job) => {
      jobProgression.set(job.id, job);
    });
    this._progressionData.next(jobProgression);
  }

  private updateActiveJob = () => {
    const activeJobProgression = this.activeJobProgression;
    if (!activeJobProgression) {
      return;
    }

    activeJobProgression.xpEarned += activeJobProgression.xpPerTick;
    if (activeJobProgression.xpEarned >= (activeJobProgression.xpToNextLevel + activeJobProgression.xpPerTick)) {
      this.jobLevelUp(activeJobProgression);
    } else {
      this.activeJobProgression = activeJobProgression;
    }

  };

  jobLevelUp(jobProgressionData: JobProgression) {
    const progressionData = this.progressionData;

    jobProgressionData.xpEarned -= jobProgressionData.xpToNextLevel;
    jobProgressionData.xpPerTick += .2;
    jobProgressionData.xpToNextLevel *= this.LEVEL_UP_MULTIPLIER;
    jobProgressionData.level++;
    progressionData.set(jobProgressionData.id, jobProgressionData);
    this.progressionData = progressionData;
  }

  getEarnings(): number {
    const jobProgression = this.progressionData;
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
      const job = this.getJobById(id);
      const cost = job.level * baseCost;
      if (playerCoins < cost) {
        return;
      }
      job.level++;
      // this.progressionData = job;
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
  getJobById(id: number): JobProgression {
    const jobs = this.progressionData;
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
      const job = this.getJobById(id);
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
