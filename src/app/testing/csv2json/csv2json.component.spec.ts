import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csv2jsonComponent } from './csv2json.component';

describe('Csv2jsonComponent', () => {
  let component: Csv2jsonComponent;
  let fixture: ComponentFixture<Csv2jsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csv2jsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csv2jsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
