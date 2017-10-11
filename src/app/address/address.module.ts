import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddressRoutingModule, routedComponents } from './address-routing.module';
import { AddressesTableComponent, AddressFormComponent } from './components';
import { SharedModule } from '../shared';
import { AddressDetailsPageComponent } from './containers/address-details-page/address-details-page.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    AddressRoutingModule
  ],
  declarations: [
    AddressesTableComponent,
    routedComponents,
    AddressFormComponent,
    AddressDetailsPageComponent
  ]
})
export class AddressModule { }
