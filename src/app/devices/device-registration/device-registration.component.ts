import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-registration',
  templateUrl: './device-registration.component.html',
  styleUrls: ['./device-registration.component.css'],
})
export class DeviceRegistrationComponent implements OnInit {
  categories = [
    { value: 'cat-0', viewValue: 'cat-0' },
    { value: 'cat-1', viewValue: 'cat-1' },
    { value: 'cat-2', viewValue: 'cat-2' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
