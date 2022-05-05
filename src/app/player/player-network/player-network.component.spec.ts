import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNetworkComponent } from './player-network.component';

describe('PlayerNetworkComponent', () => {
  let component: PlayerNetworkComponent;
  let fixture: ComponentFixture<PlayerNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
