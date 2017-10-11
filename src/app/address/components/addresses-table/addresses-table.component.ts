import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

import { AddressPresentation } from 'app/models/address';

@Component({
  selector: 'app-addresses-table',
  templateUrl: './addresses-table.component.html',
  styleUrls: ['./addresses-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesTableComponent {
  @Input()
  data: AddressPresentation[] = [];

  @Output()
  onDelete = new EventEmitter<AddressPresentation>();

  @Output()
  onSelect = new EventEmitter<AddressPresentation>();


  columns: ITdDataTableColumn[] = [
    {
      name: 'actions', label: 'Actions'
    },
    {
      name: 'id', label: 'Id'
    },
    {
      name: 'fullAddress', label: 'Full Address'
    }
  ];

  triggerDelete(address: AddressPresentation) {
    this.onDelete.emit(address);
  }

  triggerSelect(address: AddressPresentation) {
    this.onSelect.emit(address);
  }

  get isEmpty(): boolean {
    return !this.data || this.data.length === 0;
  }
}
