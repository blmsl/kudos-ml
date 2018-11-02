import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTrialsComponent } from './completed-trials.component';

describe('FinishedTrialsComponent', () => {
  let component: CompletedTrialsComponent;
  let fixture: ComponentFixture<CompletedTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
