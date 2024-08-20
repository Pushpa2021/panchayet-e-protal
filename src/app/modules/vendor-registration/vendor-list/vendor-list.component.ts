import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Vendor } from '../vendor.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit, AfterViewInit {

  vendors: Vendor[] = [
    {
      id: 1,
      gstin: '22AAAAA0000A1Z5',
      vendorName: 'ABC Traders',
      ownerName: 'John Doe',
      mobile: '1234567890',
      homeDistrict: 'District 1',
      workDistrict: 'District 2',
      town: 'Townsville',
      address: '123, Vendor Street',
      ifsc: 'SBIN0001234',
      bankDetails: 'State Bank of India, Main Branch',
      accountNumber: '123456789012',
      approved: false
    },
    {
      id: 1,
      gstin: '22AAAAA0000A1Z5',
      vendorName: 'ABC Traders',
      ownerName: 'John Doe',
      mobile: '1234567890',
      homeDistrict: 'District 1',
      workDistrict: 'District 2',
      town: 'Townsville',
      address: '123, Vendor Street',
      ifsc: 'SBIN0001234',
      bankDetails: 'State Bank of India, Main Branch',
      accountNumber: '123456789012',
      approved: false
    },{
      id: 1,
      gstin: '22AAAAA0000A1Z5',
      vendorName: 'ABC Traders',
      ownerName: 'John Doe',
      mobile: '1234567890',
      homeDistrict: 'District 1',
      workDistrict: 'District 2',
      town: 'Townsville',
      address: '123, Vendor Street',
      ifsc: 'SBIN0001234',
      bankDetails: 'State Bank of India, Main Branch',
      accountNumber: '123456789012',
      approved: false
    },

    // Add more vendor objects as needed
  ];

  selectedVendor: Vendor | null = null;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openDetailsModal(vendor: Vendor, content: any): void {
    this.selectedVendor = vendor;
    console.log(this.selectedVendor);
    const modalRef = this.modalService.open(content, { centered: true, backdrop: false, size: 'xl' });
    // const modalRef = this.modalService.open('vendorDetailsModal', { centered: true ,backdrop: false});
    modalRef.result.then(
      (result) => { /* handle close */ },
      (reason) => { /* handle dismiss */ }
    );
  }

  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;



  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }


  approveVendor(vendor: Vendor): void {
    vendor.approved = true;
  }
}
