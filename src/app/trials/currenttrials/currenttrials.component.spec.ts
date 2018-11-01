import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrialsComponent } from './currenttrials.component';

describe('CurrenttrialsComponent', () => {
  let component: CurrenttrialsComponent;
  let fixture: ComponentFixture<CurrenttrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenttrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
