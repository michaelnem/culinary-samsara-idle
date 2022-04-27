import {Component, Input, OnInit} from '@angular/core';
import {ScreenManagerService} from "../../../services/screen-manager.service";

@Component({
  selector: 'csi-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss']
})
export class NavBarItemComponent implements OnInit {

  @Input() item!: { text: string, link: string };

  constructor(
    private screenManager: ScreenManagerService
  ) { }

  ngOnInit(): void {
  }

  onLinkClicked(link: string) {
    this.screenManager.changeScreen(link);
  }

}
