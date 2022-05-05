import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatesComponent } from './player-states.component';

describe('PlayerStatesComponent', () => {
  let component: PlayerStatesComponent;
  let fixture: ComponentFixture<PlayerStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
