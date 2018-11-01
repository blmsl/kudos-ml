import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisationMLComponent } from './optimisation-ml.component';

describe('OptimisationMLComponent', () => {
  let component: OptimisationMLComponent;
  let fixture: ComponentFixture<OptimisationMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimisationMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimisationMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
