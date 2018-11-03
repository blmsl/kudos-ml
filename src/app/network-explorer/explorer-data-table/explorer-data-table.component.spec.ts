import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerDataTableComponent } from './explorer-data-table.component';

describe('ExplorerDataTableComponent', () => {
  let component: ExplorerDataTableComponent;
  let fixture: ComponentFixture<ExplorerDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorerDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
