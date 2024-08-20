import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRegistrationRoutingModule } from './vendor-registration-routing.module';
import { VendorRegistrationComponent } from './vendor-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VendorRegistrationComponent,
    VendorListComponent
  ],
  imports: [
    CommonModule,
    VendorRegistrationRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class VendorRegistrationModule { }
