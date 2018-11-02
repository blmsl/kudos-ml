import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrialComponent } from './new-trial.component';

describe('NewTrialComponent', () => {
  let component: NewTrialComponent;
  let fixture: ComponentFixture<NewTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
