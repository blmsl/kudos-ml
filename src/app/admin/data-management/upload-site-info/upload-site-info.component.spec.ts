import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSiteInfoComponent } from './upload-site-info.component';

describe('UploadSiteInfoComponent', () => {
  let component: UploadSiteInfoComponent;
  let fixture: ComponentFixture<UploadSiteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSiteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
