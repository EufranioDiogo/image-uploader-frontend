import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResultPageComponent } from './upload-result-page.component';

describe('UploadResultPageComponent', () => {
  let component: UploadResultPageComponent;
  let fixture: ComponentFixture<UploadResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
