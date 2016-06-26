import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  constructor(private http: Http) { }

  getContacts() {
  	//return this.http.get('data/contacts.json')
    return this.http.get('http://localhost:8080/contacts-spring-mvc/contact/view.action?start=0&limit=250')
      .map((res: Response) => res.json().data);
  }
}
