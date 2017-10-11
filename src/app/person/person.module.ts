import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PersonRoutingModule, routedComponents } from './person-routing.module';
import { PersonFormComponent, PersonsTableComponent } from './components';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonFormComponent,
    routedComponents,
    PersonsTableComponent
  ]
})
export class PersonModule { }
