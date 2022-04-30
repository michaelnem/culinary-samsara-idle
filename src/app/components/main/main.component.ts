import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../../utils/services/game-manager.service';
import { PlayerService } from '../../utils/services/player.service';

@Component({
  selector: 'csi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private gameManager: GameManagerService) {}
}
