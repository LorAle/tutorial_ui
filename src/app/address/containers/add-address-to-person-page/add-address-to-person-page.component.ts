
import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, isDevMode } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PersonService } from 'app/services';
import { Address } from 'app/models/address';
@Component({
  selector: 'app-add-address-to-person-page',
  templateUrl: './add-address-to-person-page.component.html',
  styleUrls: ['./add-address-to-person-page.component.css']
})
export class AddAddressToPersonPageComponent implements OnInit {

  valid$ = new BehaviorSubject<boolean>(false);

  constructor(
    private _location: Location,
    private _personService: PersonService
  ) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  handleValid(event: boolean) {
    this.valid$.next(event);
  }

  handleSubmit(data: Address) {
    this._personService.createAddress(2, data)
      .subscribe(
      result => {
        console.log(JSON.stringify(result));
      },
      error => {
        console.log('Absturz');
      });
  }

}
