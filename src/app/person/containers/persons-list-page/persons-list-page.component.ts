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

  // root/persons
  handleSelect(event: PersonPresentation) {
    // navigation parameters array
    this._router.navigate([event.id], {
      relativeTo: this._route
    });
    // // root/persons/:event.id
    // this._router.navigate(['/persons', event.id]);
    // this._router.navigateByUrl(`/persons/${event.id}`);
  }
  // root/persons/:event.id

  loadPersons() {
    const params = {
      page: 1,
      pageSize: 20,
      filter: null
    };
    this.store.dispatch(new PersonActions.QueryPersons(params));
    this.persons$ = this.store.select(fromRoot.selectPersons);
    // this.persons$ = this._personService.queryPersons({
    //   page: 1,
    //   pageSize: 20,
    //   filter: null
    // });
  }
}
