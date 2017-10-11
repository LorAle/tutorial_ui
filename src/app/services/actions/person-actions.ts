import { Address, AddressPresentation } from 'app/models/address';
import { Person, PersonPresentation, PersonDetails } from 'app/models/person';
import { Action } from '@ngrx/store';
import { PagedQuery } from 'app/models';

export const GETPERSON = '[Person] Get Person';
export const QUERYPERSONS = '[Person] Query Persons';
export const QUERYADDRESSESFROMPERSON = '[Person] Query Addresses From Person';

export const GETPERSONSUCCESS = '[Person] Get Person Success';
export const QUERYPERSONSSUCCESS = '[Person] Query Persons Success';
export const QUERYADDRESSESFROMPERSONSUCCESS = '[Person] Query Addresses From Person Success';

export class GetPerson implements Action {
    readonly type = GETPERSON;

    constructor(public payload: PagedQuery) { }
}

export class QueryPersons implements Action {
    readonly type = QUERYPERSONS;

    constructor(public payload: PagedQuery) { }
}
export class QueryAddressesFromPerson implements Action {
    readonly type = QUERYADDRESSESFROMPERSON;

    constructor(public payload: PagedQuery) { }
}

export class GetPersonSuccess implements Action {
    readonly type = GETPERSONSUCCESS;

    constructor(public payload: PersonDetails) { }
}

export class QueryPersonsSuccess implements Action {
    readonly type = QUERYPERSONSSUCCESS;

    constructor(public payload: PersonPresentation[]) { }
}
export class QueryAddressesFromPersonSuccess implements Action {
    readonly type = QUERYADDRESSESFROMPERSONSUCCESS;

    constructor(public payload: AddressPresentation[]) { }
}

export type All = GetPerson | QueryPersons | QueryAddressesFromPerson |
GetPersonSuccess | QueryPersonsSuccess | QueryAddressesFromPersonSuccess;
