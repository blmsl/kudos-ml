import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrialComponent } from './newtrial.component';

describe('NewtrialComponent', () => {
  let component: NewtrialComponent;
  let fixture: ComponentFixture<NewtrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
