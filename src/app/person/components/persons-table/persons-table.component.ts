import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

import { PersonPresentation } from 'app/models/person';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonsTableComponent implements OnInit {
  @Input()
  data: PersonPresentation[] = [];

  @Output()
  onDelete = new EventEmitter<PersonPresentation>();

  @Output()
  onSelect = new EventEmitter<PersonPresentation>();

  columns: ITdDataTableColumn[] = [
    {
      name: 'actions', label: 'Actions'
    },
    {
      name: 'id', label: 'Id'
    },
    {
      name: 'firstName', label: 'First Name'
    },
    {
      name: 'lastName', label: 'Last Name'
    },
    {
      name: 'dateOfBirth', label: 'Date of Birth'
    }
  ];

  triggerDelete(person: PersonPresentation) {
    this.onDelete.emit(person);
  }

  triggerSelect(person: PersonPresentation) {
    this.onSelect.emit(person);
  }

  get isEmpty(): boolean {
    return !this.data || this.data.length === 0;
  }

  ngOnInit() {
    this.data = [
      {
        id: 1,
        firstName: 'Hubert',
        lastName: 'Daff',
        dateOfBirth: '2017.05.15'
      },
      {
        id: 2,
        firstName: 'Adde',
        lastName: 'Kaffee',
        dateOfBirth: '2017.05.15'
      },
      {
        id: 3,
        firstName: 'Waffel',
        lastName: 'Maffe',
        dateOfBirth: '2017.05.15'
      },
      {
        id: 4,
        firstName: 'Dotana',
        lastName: 'Rule',
        dateOfBirth: '2017.05.15'
      }
    ];
  }
}
