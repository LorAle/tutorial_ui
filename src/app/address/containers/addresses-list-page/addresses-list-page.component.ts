import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AddressPresentation } from 'app/models/address';
import { PersonService } from './../../../services/person/person.service';

@Component({
  selector: 'app-addresses-list-page',
  templateUrl: './addresses-list-page.component.html',
  styleUrls: ['./addresses-list-page.component.css']
})
export class AddressesListPageComponent implements OnInit {

  addresses$: Observable<AddressPresentation[]>;
  personId$: Observable<number>;
  personId: number;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _personService: PersonService
  ) { }

  ngOnInit() {
    // console.log(this._route.parent.parent.params.map(x =>  +x.get('id')));
    this.personId$ = this._route.parent.parent.paramMap.map(x => x.get('id')).map(v => +v);
    // this._route.parent.parent.params.map(params => console.log("bla" + params.get['id']));

    this.loadAddresses();
  }

  handleDelete(event: AddressPresentation) {
    this._personService.deleteAddressFromPerson(this.personId, event.id)
      .subscribe(
      () => {
        console.log('Deleted');
      },
      error => {
        console.log('Absturz!' + JSON.stringify(error));
      },
      () => {
        this.loadAddresses();
      });
  }

  // root/persons
  handleSelect(event: AddressPresentation) {
    // navigation parameters array
    this._router.navigate([event.id], {
      relativeTo: this._route
    });
    // // root/persons/:event.id
    // this._router.navigate(['/persons', event.id]);
    // this._router.navigateByUrl(`/persons/${event.id}`);
  }
  // root/persons/:event.id

  loadAddresses() {
    console.log('load');
    this.addresses$ = this.personId$.switchMap(y => {
      this.personId = y;
      return this._personService.queryAddressesFromPerson(y, {
        page: 1,
        pageSize: 20,
        filter: null
      });
    }
    );
  }

}
