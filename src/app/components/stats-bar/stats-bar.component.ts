import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'csi-stats-bar',
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  get player() {
    return this.playerService.getPlayer();
  }
}
