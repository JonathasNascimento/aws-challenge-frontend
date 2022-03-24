import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getApi } from 'src/environments/environment';

import { HttpResponse } from '../commons/http-response';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private devicesUrl = getApi('devices')

  constructor(private http: HttpClient) {}

  findAllDevices(): Observable<HttpResponse<Device[]>> {
    return this.http.get<HttpResponse<Device[]>>(this.devicesUrl)
  }

  createNewDevices(device: Device): Observable<HttpResponse<Device>> {
    return this.http.post<HttpResponse<Device>>(this.devicesUrl, device)
  }

  deleteDevice(id: number): Observable<HttpResponse<Device>> {
    return this.http.delete<HttpResponse<Device>>(`${this.devicesUrl}/${id}`)
  }
}
