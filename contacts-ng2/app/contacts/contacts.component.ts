import {Component, OnInit} from '@angular/core';

import {AgGridNg2} from 'ag-grid-ng2/main';

import {Contact} from './contact.model';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'contacts-grid',
  directives: [AgGridNg2],
  providers: [ContactsService],
  template: `
         <ag-grid-ng2 #agGrid style="height:100%;width:583px" class="ag-fresh"
            [gridOptions]="gridOptions"
            [rowData]="contacts">
         </ag-grid-ng2 >
     `
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];

  columnDefs = [
    {headerName: 'Name', field: "name", width: 200 },
    {headerName: 'Phone', field: "phone" ,width:180},
    {headerName: 'Email', field: "email" ,width:200}
  ];

  gridOptions : any = [];

  constructor(private contactsService: ContactsService) {
    this.gridOptions = {
      rowData: this.contacts,
      columnDefs: this.columnDefs,
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    }
  }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
}
