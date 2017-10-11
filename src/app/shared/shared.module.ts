import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatCardModule,
  MatToolbarModule, MatListModule, MatInputModule,
  MatTooltipModule, MatTabsModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentDataTableModule, CovalentCommonModule } from '@covalent/core';

const MD_MODULES = [
  MatButtonModule, MatIconModule, MatCardModule,
  MatToolbarModule, MatListModule, MatInputModule,
  MatTooltipModule, MatTabsModule];
const TD_MODULES = [CovalentDataTableModule, CovalentCommonModule];

@NgModule({
  exports: [
    MD_MODULES,
    TD_MODULES,
    FlexLayoutModule,
    CommonModule
  ]
})
export class SharedModule { }
