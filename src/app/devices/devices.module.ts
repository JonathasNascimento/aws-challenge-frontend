import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesModule } from '../categories/categories.module';
import { MaterialModule } from '../material.module';
import { DeviceExcludeComponent } from './device-exclude/device-exclude.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceRegistrationComponent } from './device-registration/device-registration.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';

@NgModule({
  declarations: [
    DevicesComponent,
    DeviceRegistrationComponent,
    DeviceListComponent,
    DeviceExcludeComponent,
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MaterialModule,
    CategoriesModule,
  ],
})
export class DevicesModule {}
