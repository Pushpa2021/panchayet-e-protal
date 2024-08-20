import { Component } from '@angular/core';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent {
  showDetails = false;
  dummyData = {
    activityId: '12345',
    activityName: 'Road Construction',
    estimatedCost: '5000000',
    schemeIs: 'Asset',
    allocationAmount: '4500000',
    focusArea: 'Infrastructure'
  };

  onSearch() {
    console.log('Search button clicked');
    this.showDetails = true; // Show remaining details after search
  }

  onSubmit() {
    console.log('Submit button clicked');
    // Perform submit logic here
  }
}
