import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoTreeComponent } from './topo-tree.component';

describe('TopoTreeComponent', () => {
  let component: TopoTreeComponent;
  let fixture: ComponentFixture<TopoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
