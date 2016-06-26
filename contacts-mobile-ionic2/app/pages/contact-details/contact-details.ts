import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Contact} from '../contact/contact.model';

@Component({
    templateUrl: 'build/pages/contact-details/contact-details.html'
})
export class ContactDetailsPage {

    contact: Contact;

    constructor(private nav: NavController, private navParams: NavParams) {
        this.contact = this.navParams.data;
    }
}