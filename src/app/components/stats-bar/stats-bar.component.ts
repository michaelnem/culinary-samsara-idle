import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerData } from 'src/app/models/interfaces/playerData';
import { Age, AgeService } from 'src/app/utils/services/age.service';
import { PlayerService } from 'src/app/utils/services/player.service';

@Component({
  selector: 'csi-stats-bar',
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss'],
})
export class StatsBarComponent implements OnInit {

  player$?: Observable<PlayerData>;
  age$?: Observable<Age>;

  constructor(private playerService: PlayerService,
    private ageService: AgeService,
    private cdrRef: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.player$ = this.playerService.player$;
    this.age$ = this.ageService.age$;
  }

}
