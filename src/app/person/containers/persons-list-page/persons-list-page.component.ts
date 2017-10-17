import { AddressPresentation } from '../../../models/address/index';
import { Person } from '../../../models/person/index';
import { PagedQuery } from '../../../models/index';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PersonService } from './../../../services/person/person.service';
import { PersonPresentation } from './../../../models/person/person';

import { Store } from '@ngrx/store';
import * as PersonActions from 'app/services/actions/person-actions';
import * as fromRoot from 'app/reducers/reducers';

@Component({
  selector: 'app-persons-list-page',
  templateUrl: './persons-list-page.component.html',
  styleUrls: ['./persons-list-page.component.css']
})

export class PersonsListPageComponent implements OnInit {
  persons$: Observable<PersonPresentation[]>;
  selectedPerson$: Observable<Person>;
  selectedAddress$: Observable<AddressPresentation>;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _personService: PersonService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.loadPersons();
  }

  handleDelete(event: PersonPresentation) {
    this._personService.deletePerson(event.id)
      .subscribe(
      () => {
        console.log('Deleted');
      },
      error => {
        console.log('Absturz!' + JSON.stringify(error));
      },
      () => {
        this.loadPersons();
      });
  }

  handleSelect(event: PersonPresentation) {
    this._router.navigate([event.id], {
      relativeTo: this._route
    });
  }

  loadPersons() {
    const params = {
      page: 1,
      pageSize: 20,
      filter: null
    };
    this.store.dispatch(new PersonActions.QueryPersons(params));
    this.persons$ = this.store.select(fromRoot.selectPersons);
    this.selectedPerson$ = this.store.select(fromRoot.selectPerson);
    this.selectedAddress$ = this.store.select(fromRoot.selectAddress);
  }
}
