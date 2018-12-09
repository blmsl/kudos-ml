import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFiltersComponent } from './update-filters.component';

describe('UpdateFiltersComponent', () => {
  let component: UpdateFiltersComponent;
  let fixture: ComponentFixture<UpdateFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
