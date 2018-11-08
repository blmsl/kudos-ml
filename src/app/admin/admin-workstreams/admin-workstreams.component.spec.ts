import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkstreamsComponent } from './admin-workstreams.component';

describe('AdminWorkstreamsComponent', () => {
  let component: AdminWorkstreamsComponent;
  let fixture: ComponentFixture<AdminWorkstreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkstreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
