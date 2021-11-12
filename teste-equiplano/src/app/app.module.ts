import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ApoliceFormComponent } from './apolice-form/apolice-form.component';
import { ApoliceListComponent } from './apolice-list/apolice-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { ApoliceRestComponent } from './apolice-rest/apolice-rest.component';

registerLocaleData(ptBr);
export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ClienteListComponent,
    ApoliceFormComponent,
    ApoliceListComponent,
    ApoliceRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxCurrencyModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }
}
