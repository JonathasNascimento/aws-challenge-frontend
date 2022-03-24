import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/components/dialog-confirmation/dialog-confirmation.component';

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

  constructor(
    private devicesService: DevicesService,
    private dialog: MatDialog,
  ) {}

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
    this.openDialog(() => {
      this.deleteDeviceHandle(device)
    })
  }

  private deleteDeviceHandle(device: Device) {
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

  openDialog(onConfirm: () => void) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      width: '400px',
      data: {
        title: 'Remove Device',
        description: 'Are you sure you want to remove this device?',
        buttonConfirm: 'Remove',
      },
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'confirm') {
        onConfirm()
      }
    })
  }
}
