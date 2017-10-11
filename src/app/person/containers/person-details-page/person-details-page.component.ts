import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PersonService } from 'app/services';
import { PersonDetails, Person } from 'app/models/person';

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
    this.person$ = this._route.paramMap
      .switchMap(params => this._personService.getPerson(+params.get('id')));
    this.personData$ = this.person$
      .map(p => new Person(p.firstName, p.lastName, new Date(p.dateOfBirth)));
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
