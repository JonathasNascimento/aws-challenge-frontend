import { Component, OnInit } from '@angular/core';

import { Device } from '../device.model';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  displayedColumns: string[] = ['category', 'color', 'partNumber', 'action']
  dataSource: Device[] = []

  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
    this.loadDevices()
  }

  loadDevices() {
    this.devicesService.findAllDevices().subscribe((response) => {
      if (response.status == 'success') {
        this.dataSource = response.data
      }
    })
  }

  deleteDevice(device: Device) {
    if (device.id) {
      this.devicesService.deleteDevice(device.id).subscribe((response) => {
        if (response.status == 'success') {
          this.dataSource = this.dataSource.filter(
            (data) => data.id != device.id,
          )
        }
      })
    }
  }
}
