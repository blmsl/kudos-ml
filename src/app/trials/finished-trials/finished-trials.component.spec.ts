import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedTrialsComponent } from './finished-trials.component';

describe('FinishedTrialsComponent', () => {
  let component: FinishedTrialsComponent;
  let fixture: ComponentFixture<FinishedTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
