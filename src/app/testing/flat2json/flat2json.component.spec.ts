import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flat2jsonComponent } from './flat2json.component';

describe('Flat2jsonComponent', () => {
  let component: Flat2jsonComponent;
  let fixture: ComponentFixture<Flat2jsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flat2jsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flat2jsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
