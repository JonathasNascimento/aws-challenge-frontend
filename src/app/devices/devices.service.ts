import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpResponse } from '../commons/http-response';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor(private http: HttpClient) {}

  findAllDevices(): Observable<HttpResponse<Device[]>> {}

  createNewDevices(device: Device): Observable<HttpResponse<Device>> {}

  deleteDevice(id: number): Observable<HttpResponse<Device>> {}
}
