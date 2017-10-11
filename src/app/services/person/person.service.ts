
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { Address, AddressPresentation } from 'app/models/address';
import { Person, PersonPresentation, PersonDetails } from 'app/models/person';
import { PagedQuery } from 'app/models';

@Injectable()
export class PersonService {
  private _endPoint: string;
  private pP: Observable<PersonPresentation[]>;
  private aP: Observable<AddressPresentation[]>;
  constructor(
    private _http: HttpClient,
    private _http2: Http
  ) {
    this._endPoint = environment.personServiceEndpoint;
  }

  private get JsonContentHeader(): HttpHeaders {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

  private generatePagedParams(params: PagedQuery): HttpParams {
    let queryValues = new HttpParams();
    // endpoint?filter=value&page=value&pageSize=value
    if (params.filter) {
      queryValues = queryValues.set('filter', params.filter);
    }
    if (params.page) {
      queryValues = queryValues.set('page', params.page.toString());
    }
    if (params.pageSize) {
      queryValues = queryValues.set('pageSize', params.pageSize.toString());
    }
    return queryValues;
  }

  createPerson(data: Person): Observable<PersonPresentation> {
    return this._http.post<PersonPresentation>(this._endPoint, JSON.stringify(data), {
      headers: this.JsonContentHeader
    });
  }

  queryPersons(params: PagedQuery): Observable<PersonPresentation[]> {
    // return this._http.get<PersonPresentation[]>(this._endPoint, {
    //   params: this.generatePagedParams(params)
    // });

    // return this._http2.get('daten/data.json')
    //   .map(res => res.json())
    //   .do(data => console.log(data));

    return this.pP = this._http2.get('https://randomuser.me/api?results=' + 10).map(res => {
      const ar: PersonPresentation[] = [];
      let r: PersonPresentation;
      for (let i = 0; i < 10; i++) {
        r = {
          id: i,
          firstName: res.json().results[i].name.first,
          lastName: res.json().results[i].name.last,
          dateOfBirth: res.json().results[i].dob
        };
        ar.push(r);
      }
      return ar;
    });
  }

  getPerson(id: number): Observable<PersonDetails> {
    // return this._http.get<PersonDetails>(`${this._endPoint}/${id}`);
    return this._http2.get('https://randomuser.me/api?results=' + 1).map(res => {
      let r: PersonDetails;
      r = {
        id: 1,
        firstName: res.json().results[0].name.first,
        lastName: res.json().results[0].name.last,
        dateOfBirth: res.json().results[0].dob,
        totalAddresses: 12
      };
      return r;
    });
  }

  updatePerson(id: number, data: Person): Observable<PersonPresentation> {
    return this._http.put<PersonPresentation>(`${this._endPoint}/${id}`, JSON.stringify(data), {
      headers: this.JsonContentHeader
    });
  }

  deletePerson(id: number): Observable<any> {
    return this._http.delete(`${this._endPoint}/${id}`);
  }

  createAddress(personId: number, data: Address): Observable<AddressPresentation> {
    return this._http.post<AddressPresentation>(`${this._endPoint}/${personId}/addresses`,
      JSON.stringify(data), {
        headers: this.JsonContentHeader
      });
  }

  queryAddressesFromPerson(personId: number, params: PagedQuery): Observable<AddressPresentation[]> {
    // return this._http.get<AddressPresentation[]>(`${this._endPoint}/${personId}/addresses`, {
    //   params: this.generatePagedParams(params)
    // });

    return this.aP = this._http2.get('https://randomuser.me/api?results=' + 10).map(res => {
      const ar: AddressPresentation[] = [];
      let r: AddressPresentation;
      for (let i = 0; i < 10; i++) {
        r = {
          id: i,
          fullAddress: res.json().results[i].location.street
        };
        ar.push(r);
      }
      return ar;
    });
  }

  deleteAddressFromPerson(personId: number, addressId: number): Observable<any> {
    return this._http.delete(`${this._endPoint}/${personId}/addresses/${addressId}`);
  }
}
