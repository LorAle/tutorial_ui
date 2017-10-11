import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild,
  Input, Output, EventEmitter
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';

import { Address} from 'app/models/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddressFormComponent implements OnInit, OnDestroy {
  private $form: ISubscription;

  @ViewChild(NgForm)
  addressForm: NgForm;

  @Input()
  address: Address = new Address();

  @Output()
  valid = new EventEmitter<boolean>();


  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  ngOnInit() {
    this.$form = this.addressForm.valueChanges.subscribe(() => {
      this._triggerEmitters();
    });
  }

  // Call2ed once, before the instance is destroyed.
  ngOnDestroy() {
    this.$form.unsubscribe();
  }

  private _triggerEmitters() {
   this.valid.emit(this.addressForm.valid);
  }

}
