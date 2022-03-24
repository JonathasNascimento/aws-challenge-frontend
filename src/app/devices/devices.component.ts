import { Component, OnInit, ViewChild } from '@angular/core';

import { DeviceListComponent } from './device-list/device-list.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  @ViewChild(DeviceListComponent) child!: DeviceListComponent

  constructor() {}

  ngOnInit(): void {}

  onDeviceAdded() {
    this.child.loadDevices()
  }
}
