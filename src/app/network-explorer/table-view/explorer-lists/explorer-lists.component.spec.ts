import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerListsComponent } from './explorer-lists.component';

describe('ExplorerListsComponent', () => {
  let component: ExplorerListsComponent;
  let fixture: ComponentFixture<ExplorerListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorerListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
