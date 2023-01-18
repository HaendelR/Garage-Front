import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AtelierAccueilComponent } from './pages/atelier-accueil/atelier-accueil.component';
import { ClientAccueilComponent } from './pages/client-accueil/client-accueil.component';
import { FormDiagnosticComponent } from './pages/form-diagnostic/form-diagnostic.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "accueil-client",
    component: ClientAccueilComponent
  },
  {
    path: "accueil-atelier",
    component: AtelierAccueilComponent
  },
  {
    path: "inscription",
    component: InscriptionComponent
  },
  {
    path: "diagnostic-form/:matricule",
    component: FormDiagnosticComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
