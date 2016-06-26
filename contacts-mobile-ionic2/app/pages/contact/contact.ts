import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Contact} from '../contact/contact.model';
import {ContactsService} from '../contact/contacts.service';
import {ContactDetailsPage} from '../contact-details/contact-details';

@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [ContactsService]
})
export class ContactPage implements OnInit {

  contacts: Contact[] = [];


  constructor(private nav: NavController, private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }

  itemSelected(contact){
    this.nav.push(ContactDetailsPage, contact);
  }
}
