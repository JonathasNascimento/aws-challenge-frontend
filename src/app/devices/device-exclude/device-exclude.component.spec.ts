import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceExcludeComponent } from './device-exclude.component';

describe('DeviceExcludeComponent', () => {
  let component: DeviceExcludeComponent;
  let fixture: ComponentFixture<DeviceExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceExcludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
