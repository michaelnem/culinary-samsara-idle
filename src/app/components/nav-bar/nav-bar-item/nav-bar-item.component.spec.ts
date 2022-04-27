import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarItemComponent } from './nav-bar-item.component';

describe('NavBarItemComponent', () => {
  let component: NavBarItemComponent;
  let fixture: ComponentFixture<NavBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
