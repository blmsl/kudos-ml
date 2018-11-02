import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialResultsComponent } from './trial-results.component';

describe('TrialResultsComponent', () => {
  let component: TrialResultsComponent;
  let fixture: ComponentFixture<TrialResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
