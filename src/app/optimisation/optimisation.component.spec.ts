import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisationComponent } from './optimisation.component';

describe('OptimisationComponent', () => {
  let component: OptimisationComponent;
  let fixture: ComponentFixture<OptimisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
