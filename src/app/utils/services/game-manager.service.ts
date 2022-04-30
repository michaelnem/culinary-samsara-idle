import { Injectable } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SaveManagerService } from './save-manager.service';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private _pause$: any = new Subject();
  private _tick?: Observable<any>;
  private sub?: Subscription;

  private tickSubject = new Subject();

  constructor(
    private saveManagerService: SaveManagerService,
  ) {
    this.load();
    this._tick = interval(300).pipe(
      tap(this.gameTick),
      takeUntil(this._pause$)
    );
    this.resume();
  }

  gameTick = (value: number) => {
    // if (value % 10 === 0) {
    //   this.save();
    // }

    // this.playerService.tick();
    this.tickSubject.next(value);
  };

  get tick$() {
    return this.tickSubject.asObservable();
  }

  load() {
    const savedGame = this.saveManagerService.loadGame();
    if (!savedGame) {
      return;
    }
    // this.playerService.setPlayer(savedGame as PlayerData);
  }

  save() {
    // this.saveManagerService.saveGame(this.playerService.getPlayer());
  }

  pause() {
    this._pause$.next();
  }

  resume() {
    this.sub = this._tick?.subscribe();
  }
}
