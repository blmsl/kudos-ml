import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkExplorerComponent } from './network-explorer.component';

describe('NetworkExplorerComponent', () => {
  let component: NetworkExplorerComponent;
  let fixture: ComponentFixture<NetworkExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
