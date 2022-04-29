import { Component, OnInit } from '@angular/core';
import { GameManagerService } from 'src/app/services/game-manager.service';

@Component({
  selector: 'csi-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillValue = 0;

  constructor(private gameManagerService: GameManagerService) { }

  ngOnInit(): void {
    this.gameManagerService.tick$.subscribe({
      next: () => {
        if (this.skillValue >= 100) {
          this.skillValue = 0
        } else {
          this.skillValue += 10;
        }
      }
    });
  }

}
