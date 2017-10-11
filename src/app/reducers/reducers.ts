import * as fromPerson from '../services/reducers/person-reducer';

export interface State {
    search: fromPerson.State;
}

export const reducers = {
    search: fromPerson.reducer
};

export function selectPersons(state: State) {
    return state.search.persons;
}

export function selectPerson(state: State) {
    return state.search.selectedPerson;
}

export function selectAddresses(state: State) {
    return state.search.addresses;
}

export function selectSearchTerms(state: State) {
    return state.search.searchTerms;
}
