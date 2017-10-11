import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressesListPageComponent, AddAddressToPersonPageComponent, AddressDetailsPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: AddressesListPageComponent
  },
  {
    path: 'add',
    component: AddAddressToPersonPageComponent
  },
  {
    path: ':id',
    component: AddressDetailsPageComponent
  }

];

export const routedComponents = [AddressesListPageComponent, AddAddressToPersonPageComponent, AddressDetailsPageComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
