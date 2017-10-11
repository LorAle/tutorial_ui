import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild,
  Input, Output, EventEmitter
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';

import { Person } from 'app/models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonFormComponent implements OnInit, OnDestroy {
  private $form: ISubscription;

  @ViewChild(NgForm)
  personForm: NgForm;

  @Input()
  person: Person = new Person();

  @Output()
  valid = new EventEmitter<boolean>();


  // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  ngOnInit() {
    this.$form = this.personForm.valueChanges.subscribe(() => {
      this._triggerEmitters();
    });
  }

  // Call2ed once, before the instance is destroyed.
  ngOnDestroy() {
    this.$form.unsubscribe();
  }

  private _triggerEmitters() {
    this.valid.emit(this.personForm.valid);
  }

}
