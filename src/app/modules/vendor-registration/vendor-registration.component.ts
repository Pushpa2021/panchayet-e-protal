import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent {
  vendorForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      gstin: ['', [Validators.required]],
      confirmGstin: ['', [Validators.required]],
      vendorName: ['', [Validators.required]],
      ownerName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      homeDistrict: ['', [Validators.required]],
      workDistrict: ['', [Validators.required]],
      town: ['', [Validators.required]],
      address: ['', [Validators.required]],
      ifsc: ['', [Validators.required]],
      bankDetails: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      confirmAccountNumber: ['', [Validators.required]],
      uploadGstinDoc: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.vendorForm.valid) {
      console.log('Form Submitted:', this.vendorForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
