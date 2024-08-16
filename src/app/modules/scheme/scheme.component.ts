import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent {
  // Define the scheme object with initial values
  scheme = {
    level: 'block',
    financialYear: '2023-2024',
    oldSchemeCode: '',
    schemeFor: 'all',
    focusArea: 'sanitation',
    schemeNameEn: '',
    schemeNameBn: '',
    category: 'sc',
    isFreshScheme: false,
    isOnGoing: false,
    isClose: false,
    totalDuration: null,
    yearStarts: 2024,
    monthStarts: 'february',
    expectedBeneficiaries: {
      gen: null,
      sc: null,
      st: null,
      obc: null
    },
    totalBeneficiaries: null,
    labours: {
      skilled: null,
      semiSkilled: null,
      unSkilled: null,
      total: null
    },
    totalLabours: null,
    expectedManDays: null,
    expectedWomanBeneficiaries: null,
    totalCost: null,
    noOfStages: 1,
    isAsset: false,
    assetType: 'choose',
    assetCategory: 'choose',
    revenueVillage: 'choose',
    isTraining: false,
    trainingCategory: 'choose',
    organizedBy: 'choose',
    subjectOfTraining: '',
    totalTrainees: null,
    totalDurationHours: null,
    isCommunity: false,
    communityService: 'choose',
    serviceDescription: '',
    durationServiceDays: null,
    totalExpectedBeneficiaries: null
  };
  // Handle checkbox change for scheme types
  onSchemeTypeChange(type: string) {
    switch (type) {
      case 'asset':
        this.scheme.isAsset = !this.scheme.isAsset;
        break;
      case 'training':
        this.scheme.isTraining = !this.scheme.isTraining;
        break;
      case 'community':
        this.scheme.isCommunity = !this.scheme.isCommunity;
        break;
    }
  }
  // Method to calculate total beneficiaries
  calculateTotalBeneficiaries() {
    this.scheme.totalBeneficiaries = this.scheme.expectedBeneficiaries.gen +
      this.scheme.expectedBeneficiaries.sc +
      this.scheme.expectedBeneficiaries.st +
      this.scheme.expectedBeneficiaries.obc;

    // // Ensure total beneficiaries do not exceed total labours
    // if (this.scheme.totalBeneficiaries > this.scheme.totalLabours) {
    //   Swal.fire({
    //     icon: 'warning',
    //     title: 'Exceeds Total Labours',
    //     text: 'Total beneficiaries cannot exceed total labours.',
    //     confirmButtonText: 'OK'
    //   });
    //   this.scheme.totalBeneficiaries = this.scheme.totalLabours;
    // }
  }

  // Method to calculate total labours
  calculateTotalLabours() {
    this.scheme.totalLabours = this.scheme.labours.skilled +
      this.scheme.labours.semiSkilled +
      this.scheme.labours.unSkilled;

    // Ensure total beneficiaries do not exceed total labours
    if (this.scheme.totalBeneficiaries > this.scheme.totalLabours) {
      Swal.fire({
        icon: 'warning',
        title: 'Exceeds Total Labours',
        text: 'Total beneficiaries cannot exceed total labours.',
        confirmButtonText: 'OK'
      });
      // this.scheme.totalBeneficiaries = this.scheme.totalLabours;
    }
  }
  // Handle form submission
  onSubmit() {
    console.log('Form submitted:', this.scheme);
    // Add logic to handle form submission
  }
}
