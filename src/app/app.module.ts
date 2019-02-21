import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PcsearchComponent } from './pcsearch/pcsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    PcsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
