import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialsDashboardComponent } from './trials-dashboard.component';

describe('TrialsDashboardComponent', () => {
  let component: TrialsDashboardComponent;
  let fixture: ComponentFixture<TrialsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
