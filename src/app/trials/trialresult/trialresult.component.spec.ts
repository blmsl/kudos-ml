import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialresultComponent } from './trialresult.component';

describe('TrialresultComponent', () => {
  let component: TrialresultComponent;
  let fixture: ComponentFixture<TrialresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
