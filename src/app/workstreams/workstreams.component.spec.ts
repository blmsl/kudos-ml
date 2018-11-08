import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstreamsComponent } from './workstreams.component';

describe('WorkstreamsComponent', () => {
  let component: WorkstreamsComponent;
  let fixture: ComponentFixture<WorkstreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
