import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedtrialsComponent } from './completedtrials.component';

describe('CompletedtrialsComponent', () => {
  let component: CompletedtrialsComponent;
  let fixture: ComponentFixture<CompletedtrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedtrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedtrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
