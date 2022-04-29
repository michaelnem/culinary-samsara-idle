import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionBarSectionComponent } from './progression-bar-section.component';

describe('ProgressionBarSectionComponent', () => {
  let component: ProgressionBarSectionComponent;
  let fixture: ComponentFixture<ProgressionBarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressionBarSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressionBarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
