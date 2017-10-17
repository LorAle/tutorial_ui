import { Person } from '../../models/person/index';
import { PersonService } from '../index';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Actions, Effect } from '@ngrx/effects';

import * as PersonActions from '../actions/person-actions';

@Injectable()
export class PersonEffects {
    @Effect()
    searchPersons$: Observable<Action> = this._actions$.ofType(PersonActions.QUERYPERSONS)
        .map((action: PersonActions.QueryPersons) => action.payload)
        .switchMap(terms => this._personService.queryPersons(terms))
        .map(results => new PersonActions.QueryPersonsSuccess(results));

    @Effect()
    searchPersonDetails$: Observable<Action> = this._actions$.ofType(PersonActions.GETPERSONDETAILS)
        .map((action: PersonActions.GetPersonDetails) => action.payload)
        .switchMap(terms => this._personService.getPerson(terms))
        .map(results => new PersonActions.GetPersonDetailsSuccess(results));

    @Effect()
    searchPerson$: Observable<Action> = this._actions$.ofType(PersonActions.GETPERSON)
        .map((action: PersonActions.GetPerson) => action.payload)
        .switchMap(terms => this._personService.getPerson(terms))
        .map(p => new Person(p.firstName, p.lastName, new Date(p.dateOfBirth)))
        .map(results => new PersonActions.GetPersonSuccess(results));

    @Effect()
    searchAddressesFromPerson$: Observable<Action> = this._actions$.ofType(PersonActions.QUERYADDRESSESFROMPERSON)
        .map((action: PersonActions.QueryAddressesFromPerson) => action.payload)
        .switchMap(terms => this._personService.queryAddressesFromPerson(terms.id, terms.params))
        .map(results => new PersonActions.QueryAddressesFromPersonSuccess(results));

    @Effect()
    searchAddressFromPerson$: Observable<Action> = this._actions$.ofType(PersonActions.GETADDRESSFROMPERSON)
        .map((action: PersonActions.GetAddressFromPerson) => action.payload)
        .switchMap(terms => this._personService.queryAddressesFromPerson(terms.id, terms.params))
        .do(x => console.log(x))
        .map(x => x[0])
        .map(results => new PersonActions.GetAddressFromPersonSuccess(results));



    constructor(
        private _actions$: Actions,
        private _personService: PersonService
    ) {
    }
}
