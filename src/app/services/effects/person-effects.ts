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
    search$: Observable<Action> = this._actions$.ofType(PersonActions.QUERYPERSONS)
    .map((action: PersonActions.GetPerson) => action.payload)
    .switchMap(terms => this._personService.queryPersons(terms))
    .map(results => new PersonActions.QueryPersonsSuccess(results));

    constructor(
        private _actions$: Actions,
        private _personService: PersonService
    ) {
        console.log('effect');
    }
}
