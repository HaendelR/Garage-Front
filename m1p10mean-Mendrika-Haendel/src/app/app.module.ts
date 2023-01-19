import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ClientAccueilComponent } from './pages/client-accueil/client-accueil.component';
import { AtelierAccueilComponent } from './pages/atelier-accueil/atelier-accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { FormDiagnosticComponent } from './pages/form-diagnostic/form-diagnostic.component';
import { VoitureDiagnostiquesComponent } from './pages/voiture-diagnostiques/voiture-diagnostiques.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    ClientAccueilComponent,
    AtelierAccueilComponent,
    InscriptionComponent,
    FormDiagnosticComponent,
    VoitureDiagnostiquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
