import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/categories/category.model';

import { Device } from '../device.model';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device-registration',
  templateUrl: './device-registration.component.html',
  styleUrls: ['./device-registration.component.css'],
})
export class DeviceRegistrationComponent implements OnInit {
  form: FormGroup

  constructor(
    private devicesService: DevicesService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      color: [null, Validators.required],
      partNumber: [null, [Validators.required]],
      categoryId: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {}

  onCategorySelected(event: Category) {
    const control = this.form.get('categoryId')
    control?.setValue(event.id)
  }

  createDevice() {
    const device: Device = {
      categoryId: +this.getFieldValue('categoryId'),
      color: this.getFieldValue('color'),
      partNumber: +this.getFieldValue('partNumber'),
    }
    console.log(device)
    this.devicesService.createNewDevices(device).subscribe((response) => {
      console.log(response)
    })
  }

  private getFieldValue(key: string): string {
    const control = this.form.get(key)
    return control?.value
  }
}
