import { Person, PersonPresentation, PersonDetails } from 'app/models/person';
import { Address, AddressPresentation } from 'app/models/address';
import { PagedQuery } from 'app/models';

import * as PersonActions from '../actions/person-actions';


export interface State {
    searchTerms: PagedQuery | any;
    persons: PersonPresentation[];
    selectedPerson: PersonDetails | Person;
    addresses: AddressPresentation[];
    selectedAddress: AddressPresentation;
}

const initialState: State = {
    searchTerms: {
        page: 1,
        pageSize: 20,
        filter: null
    },
    persons: null,
    selectedPerson: null,
    addresses: null,
    selectedAddress: null
};

export function reducer(state = initialState, action: PersonActions.All) {
    switch (action.type) {
        case PersonActions.GETPERSON: {
            console.log('GETPERSON');
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.GETPERSONDETAILS: {
            console.log('GETPERSONDEtails');
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.QUERYPERSONS: {
            console.log('queryPersons');
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.QUERYADDRESSESFROMPERSON: {
            console.log('QUERYADDRESSESFROMPERSON');
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.GETADDRESSFROMPERSON: {
            console.log('GETADDRESSFROMPERSONPERSON');
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.GETPERSONSUCCESS: {
            console.log('GETPERSONSUCCESS');
            return { ...state, selectedPerson: action.payload };
        }
        case PersonActions.GETPERSONDETAILSSUCCESS: {
            console.log('GETPERSONDETAILSSUCCESS');
            console.log(action.payload);
            return { ...state, selectedPerson: action.payload };
        }
        case PersonActions.QUERYPERSONSSUCCESS: {
            console.log('QueryPersonsSucces');
            return { ...state, persons: action.payload };
        }
        case PersonActions.QUERYADDRESSESFROMPERSONSUCCESS: {
            console.log('QUERYADDRESSESFROMPERSONSUCCESS');
            return { ...state, addresses: action.payload };
        }
        case PersonActions.GETADDRESSFROMPERSONSUCCESS: {
            console.log('GETADDRESSFROMPERSONSUCCESS');
            return { ...state, selectedAddress: action.payload };
        }
        default: {
            return state;
        }
    }
}
