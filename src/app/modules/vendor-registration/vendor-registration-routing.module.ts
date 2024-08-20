import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorRegistrationComponent } from './vendor-registration.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [{ path: '', component: VendorRegistrationComponent },
  { path: 'vendor-list', component: VendorListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRegistrationRoutingModule { }
