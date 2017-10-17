import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PersonService } from 'app/services';
import { PersonDetails, Person } from 'app/models/person';

import * as PersonActions from 'app/services/actions/person-actions';
import * as fromRoot from 'app/reducers/reducers';

@Component({
  selector: 'app-person-details-page',
  templateUrl: './person-details-page.component.html',
  styleUrls: ['./person-details-page.component.css']
})
export class PersonDetailsPageComponent implements OnInit {
  personData$: Observable<Person>;
  valid$ = new BehaviorSubject<boolean>(true);
  person$: Observable<PersonDetails>;
  private id: number;

  constructor(
    private _personService: PersonService,
    private _route: ActivatedRoute,
    private _location: Location,
    private store: Store<fromRoot.State>
  ) {
    this.id = +this._route.snapshot.paramMap.get('id');
    this.store.dispatch(new PersonActions.GetPerson(this.id));
  }

  ngOnInit() {
    console.log('start');
    this.personData$ = this.store.select(fromRoot.selectPerson);
    console.log('ende');
  }

  handleSubmit(data: Person) {
    this._route.paramMap
      .switchMap(params =>
        this._personService.updatePerson(+params.get('id'), data))
      .subscribe(
      result => {
        console.log(JSON.stringify(result));
      },
      error => {
        console.log('Absturz');
      });
  }

  handleValid(event: boolean) {
    this.valid$.next(event);
  }

  goBack() {
    this._location.back();
  }

}
