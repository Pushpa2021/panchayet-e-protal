import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-draft-plan',
  templateUrl: './draft-plan.component.html',
  styleUrls: ['./draft-plan.component.css']
})
export class DraftPlanComponent implements OnInit {
  plan = {
    planType: '',
    planYear: '',
    approvalDate: ''
  };

  planTypes = ['Main', 'Suplimentary']; // Replace with your actual plan types
  financialYears = ['2023-2024', '2024-2025', '2025-2026']; // Replace with actual financial years

  activities = [
    { id: 1, name: 'Activity 1', estimatedCost: 1000, schemeType: 'Scheme A', allocationAmount: 0, financialYear: '2023-2024' },
    { id: 2, name: 'Activity 2', estimatedCost: 2000, schemeType: 'Scheme B', allocationAmount: 0, financialYear: '2023-2024' }
  ]; // Replace with actual activities

  showTable = false; // Controls whether the table should be displayed
  selectedActivity: any; // Holds the currently selected activity for allotment

  fundHeads = ['6th SFC', '7th SFC', 'Other'];
  fundTypes = ['Development Fund'];
  fundSubTypes = ['Tied Fund', 'Untied Fund', 'Incentive Fund'];

  allocation = {
    fundHead: '',
    fundType: '',
    fundSubType: '',
    amount: 0
  };

  availableDevelopmentFund = 0;
  availableTiedFund = 0;
  availableUntiedFund = 0;
  availableIncentiveFund = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.calculateAvailableFunds();
  }

  onSearch(): void {
    this.showTable = true; // Show the table when the search button is clicked
  }

  onRemove(activity: any): void {
    this.activities = this.activities.filter(a => a !== activity); // Remove the selected activity
  }

  read(activity: any, modal: any): void {
    console.log(modal);
    console.log(activity);
    this.selectedActivity = activity;
    this.modalService.open(modal, { size: 'xl', backdrop: false, keyboard: false }); // Pass the template reference directly
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log('File selected:', file);
    // Logic to handle file selection
  }

  onSave(): void {
    console.log('Saving plan:', this.plan);
    // Logic to save the plan details
  }

  calculateAvailableFunds(): void {
    // Dummy logic for calculating available funds
    this.availableDevelopmentFund = 1000000;
    this.availableTiedFund = 500000;
    this.availableUntiedFund = 300000;
    this.availableIncentiveFund = 200000;
  }

  allocateFunds(): void {
    console.log('Allocating funds for activity:', this.selectedActivity);
    console.log('Allocation details:', this.allocation);
    if (this.selectedActivity.estimatedCost < this.allocation.amount) {
      Swal.fire({
        icon: 'warning',
        title: 'Allocation Error',
        text: 'The allocation amount cannot exceed the allowed allocation amount!',
        confirmButtonText: 'OK'
      });
      return; // Stops further execution
    }
    // Update the allocationAmount of the selected activity
    this.selectedActivity.allocationAmount = this.allocation.amount;
    // Reset the allocation form
    this.allocation = {
      fundHead: '',
      fundType: '',
      fundSubType: '',
      amount: 0
    };

    this.modalService.dismissAll(); // Close modal after allocation
  }
}
