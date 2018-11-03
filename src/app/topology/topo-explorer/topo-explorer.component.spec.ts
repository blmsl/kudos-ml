import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoExplorerComponent } from './topo-explorer.component';

describe('TopoExplorerComponent', () => {
  let component: TopoExplorerComponent;
  let fixture: ComponentFixture<TopoExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
