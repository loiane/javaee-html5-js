import {Component} from '@angular/core';

import {ContactsComponent} from './contacts/contacts.component';

@Component({
    selector: 'my-app',
    directives: [ContactsComponent],
    template: '<contacts-grid></contacts-grid>'
})
export class AppComponent { }
