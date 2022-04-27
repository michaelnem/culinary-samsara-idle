import {Component, OnInit} from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';

@Component({
  selector: 'csi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private gameManager: GameManagerService) {
  }

  ngOnInit() {
    this.gameManager.resume();
  }
}
