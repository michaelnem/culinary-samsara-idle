import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'csi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private gameManager: GameManagerService) {}
}
