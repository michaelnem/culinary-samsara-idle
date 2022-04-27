import { Injectable } from '@angular/core';
import { SaveManagerService } from './save-manager.service';
import { PlayerService } from './player.service';
import { PlayerData } from '../interfaces/playerData';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  private _pause$: any = new Subject();
  private _tick: Observable<any> = interval(300).pipe(
    tap(this.gameTick),
    takeUntil(this._pause$)
  );
  private sub?: Subscription;

  constructor(
    private saveManagerService: SaveManagerService,
    private playerService: PlayerService
  ) {
    this.load();
  }

  gameTick(value: number) {
    // if (value % 10 === 0) {
    //   this.save();
    // }
    this.playerService.tick();
  }

  load() {
    const savedGame = this.saveManagerService.loadGame();
    if (!savedGame) {
      return;
    }
    this.playerService.setPlayer(savedGame as PlayerData);
  }

  save() {
    this.saveManagerService.saveGame(this.playerService.getPlayer());
  }

  pause() {
    this._pause$.next();
  }

  resume() {
    this.sub = this._tick.subscribe();
  }
}
