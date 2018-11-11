import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerToolbarComponent } from './explorer-toolbar.component';

describe('ExplorerToolbarComponent', () => {
  let component: ExplorerToolbarComponent;
  let fixture: ComponentFixture<ExplorerToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorerToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
