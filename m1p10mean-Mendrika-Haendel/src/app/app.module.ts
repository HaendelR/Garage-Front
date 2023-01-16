import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ClientAccueilComponent } from './pages/client-accueil/client-accueil.component';
import { AtelierAccueilComponent } from './pages/atelier-accueil/atelier-accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ClientAccueilComponent,
    AtelierAccueilComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
