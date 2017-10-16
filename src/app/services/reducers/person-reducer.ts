import { Person, PersonPresentation, PersonDetails } from 'app/models/person';
import { Address, AddressPresentation } from 'app/models/address';
import { PagedQuery } from 'app/models';

import * as PersonActions from '../actions/person-actions';


export interface State {
    searchTerms: PagedQuery;
    persons: PersonPresentation[];
    selectedPerson: PersonDetails | null;
    addresses: AddressPresentation[] | null;
}

const initialState: State = {
    searchTerms: {
        page: 1,
        pageSize: 20,
        filter: null
    },
    persons: null,
    selectedPerson: null,
    addresses: null
};

export function reducer(state = initialState, action: PersonActions.All) {
    switch (action.type) {
        case PersonActions.GETPERSON: {
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.QUERYPERSONS: {
            console.log('queryPersons');
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.QUERYADDRESSESFROMPERSON: {
            return { ...state, searchTerms: action.payload };
        }
        case PersonActions.GETPERSONSUCCESS: {
            return { ...state, selectedPerson: action.payload };
        }
        case PersonActions.QUERYPERSONSSUCCESS: {
            console.log('QueryPersonsSucces');
            return { ...state, persons: action.payload };
        }
        case PersonActions.QUERYADDRESSESFROMPERSONSUCCESS: {
            return { ...state, addresses: action.payload };
        }
        default: {
            return state;
        }
    }
}
