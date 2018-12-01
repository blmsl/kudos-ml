import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNetworkElementsComponent } from './list-network-elements.component';

describe('ListNetworkElementsComponent', () => {
  let component: ListNetworkElementsComponent;
  let fixture: ComponentFixture<ListNetworkElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNetworkElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNetworkElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
