import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculosViewComponent } from './veiculos/veiculos-view.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    VeiculosViewComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
