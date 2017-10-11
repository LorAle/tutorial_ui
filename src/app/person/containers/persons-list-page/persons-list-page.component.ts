import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PersonService } from './../../../services/person/person.service';
import { PersonPresentation } from './../../../models/person/person';

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
    private _personService: PersonService
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
    this.persons$ = this._personService.queryPersons({
      page: 1,
      pageSize: 20,
      filter: null
    });
  }
}
