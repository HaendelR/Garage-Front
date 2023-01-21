import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

<<<<<<< Updated upstream
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ClientAccueilComponent } from './pages/client-accueil/client-accueil.component';
import { AtelierAccueilComponent } from './pages/atelier-accueil/atelier-accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { FormDiagnosticComponent } from './pages/form-diagnostic/form-diagnostic.component';
import { VoitureDiagnostiquesComponent } from './pages/voiture-diagnostiques/voiture-diagnostiques.component';
import { DiagnostiqueDevisComponent } from './pages/diagnostique-devis/diagnostique-devis.component';
import { VoitureDiagnostiquesAtelierComponent } from './pages/voiture-diagnostiques-atelier/voiture-diagnostiques-atelier.component';
=======
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { ClientAccueilComponent } from "./pages/client-accueil/client-accueil.component";
import { AtelierAccueilComponent } from "./pages/atelier-accueil/atelier-accueil.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";
import { FormDiagnosticComponent } from "./pages/form-diagnostic/form-diagnostic.component";
import { VoitureDiagnostiquesComponent } from "./pages/voiture-diagnostiques/voiture-diagnostiques.component";
import { DragCarComponent } from "./pages/drag-car/drag-car.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    DiagnostiqueDevisComponent,
    VoitureDiagnostiquesAtelierComponent,
=======
    DragCarComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
