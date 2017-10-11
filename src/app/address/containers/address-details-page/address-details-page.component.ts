import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PersonService } from 'app/services';
import { AddressPresentation } from 'app/models/address';
@Component({
  selector: 'app-address-details-page',
  templateUrl: './address-details-page.component.html',
  styleUrls: ['./address-details-page.component.css']
})
export class AddressDetailsPageComponent implements OnInit {
  personId$: Observable<number>;
  addresses$: Observable<AddressPresentation[]>;
  valid$ = new BehaviorSubject<boolean>(true);
  address: AddressPresentation;
  personId: number;
  private id: number;

  constructor(
    private _personService: PersonService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {
    // Alternative
    // this.id = +this._route.snapshot.paramMap.get('id');
  }

  // local/persons/1000
  // anfrage schicken
  // bearbeite...
  // local/person/2000
  // vorherige anfrage abbrechen
  // anfrage schciken
  // bearbeite
  ngOnInit() {
    this.personId$ = this._route.parent.parent.parent.paramMap.map(x => x.get('id')).map(v => +v);
    this.addresses$ = this.personId$.switchMap(y => {
      this.personId = y;
      return this._personService.queryAddressesFromPerson(y, {
        page: 1,
        pageSize: 20,
        filter: null
      });
    }
    );

    this.addresses$.forEach(x => {
      x.map(y => {
        if (y.id === this.personId) {
          this.address = y;
        }
      });
    });
  }

  handleSubmit(data: AddressPresentation) {
    // this._route.paramMap
    //   .switchMap(params =>
    //     this._personService.updateAddress(this.personId, +params.get('id'), data))
    //   .subscribe(
    //   result => {
    //     console.log(JSON.stringify(result));
    //   },
    //   error => {
    //     console.log('Absturz');
    //   });

  }

  handleValid(event: boolean) {
    this.valid$.next(event);
  }

  goBack() {
    this._location.back();
  }
}
