import { PersonEffects } from './services/effects/person-effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/reducers';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';


import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CredentialInterceptorProvider, ErrorInterceptorProvider } from './interceptors';
import { AppComponent } from './app.component';
import { PersonService } from './services';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    HttpClientModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(PersonEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    // Interceptors
    CredentialInterceptorProvider,
    ErrorInterceptorProvider,
    // Services
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this._registerAppIcons();
  }

  private _registerAppIcons() {
    this._iconRegistry.addSvgIconInNamespace('app', 'logo',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/people.svg'));
  }
}
