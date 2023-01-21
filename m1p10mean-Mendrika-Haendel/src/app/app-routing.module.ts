<<<<<<< Updated upstream
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AtelierAccueilComponent } from './pages/atelier-accueil/atelier-accueil.component';
import { ClientAccueilComponent } from './pages/client-accueil/client-accueil.component';
import { DiagnostiqueDevisComponent } from './pages/diagnostique-devis/diagnostique-devis.component';
import { FormDiagnosticComponent } from './pages/form-diagnostic/form-diagnostic.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { VoitureDiagnostiquesAtelierComponent } from './pages/voiture-diagnostiques-atelier/voiture-diagnostiques-atelier.component';
import { VoitureDiagnostiquesComponent } from './pages/voiture-diagnostiques/voiture-diagnostiques.component';
=======
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { AtelierAccueilComponent } from "./pages/atelier-accueil/atelier-accueil.component";
import { ClientAccueilComponent } from "./pages/client-accueil/client-accueil.component";
import { DragCarComponent } from "./pages/drag-car/drag-car.component";
import { FormDiagnosticComponent } from "./pages/form-diagnostic/form-diagnostic.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";
import { VoitureDiagnostiquesComponent } from "./pages/voiture-diagnostiques/voiture-diagnostiques.component";
>>>>>>> Stashed changes

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
  },
  {
    path: "accueil-client",
    component: ClientAccueilComponent,
  },
  {
    path: "accueil-atelier",
    component: AtelierAccueilComponent,
  },
  {
    path: "inscription",
    component: InscriptionComponent,
  },
  {
    path: "diagnostic-form/:matricule",
    component: FormDiagnosticComponent,
  },
  {
    path: "voiture-diagnostiques",
<<<<<<< Updated upstream
    component: VoitureDiagnostiquesComponent
  },
  {
    path: "devis-diagnostique/:numberPlate/:status",
    component: DiagnostiqueDevisComponent
  },
  {
    path: "voiture-diagnostiques-atelier",
    component: VoitureDiagnostiquesAtelierComponent
  }
=======
    component: VoitureDiagnostiquesComponent,
  },
  {
    path: "drag-car",
    component: DragCarComponent,
  },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
