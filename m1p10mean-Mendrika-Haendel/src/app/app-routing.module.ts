import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { AtelierAccueilComponent } from "./pages/atelier-accueil/atelier-accueil.component";
import { ClientAccueilComponent } from "./pages/client-accueil/client-accueil.component";
import { ReparationCarComponent } from "./pages/reparation-car/reparation-car.component";
import { DiagnostiqueDevisComponent } from "./pages/diagnostique-devis/diagnostique-devis.component";
import { FormDiagnosticComponent } from "./pages/form-diagnostic/form-diagnostic.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";
import { VoitureDiagnostiquesAtelierComponent } from "./pages/voiture-diagnostiques-atelier/voiture-diagnostiques-atelier.component";
import { VoitureDiagnostiquesComponent } from "./pages/voiture-diagnostiques/voiture-diagnostiques.component";
import { ListCarWaitComponent } from "./pages/list-car-wait/list-car-wait.component";
import { ListCarRepairComponent } from "./pages/list-car-repair/list-car-repair.component";
import { ListCarRepairClientComponent } from "./pages/list-car-repair-client/list-car-repair-client.component";
import { DetailCarRepairClientComponent } from "./pages/detail-car-repair-client/detail-car-repair-client.component";
import { AccueilFinanceComponent } from "./pages/accueil-finance/accueil-finance.component";
import { CarFinishDeliverComponent } from "./pages/car-finish-deliver/car-finish-deliver.component";
import { CarDepotClientComponent } from "./pages/car-depot-client/car-depot-client.component";
import { ChiffreAffaireComponent } from "./pages/chiffre-affaire/chiffre-affaire.component";

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
    component: VoitureDiagnostiquesComponent,
  },
  {
    path: "reparation-car/:numberPlate",
    component: ReparationCarComponent,
  },
  {
    path: "voiture-diagnostiques-atelier",
    component: VoitureDiagnostiquesAtelierComponent,
  },
  {
    path: "devis-diagnostique/:numberPlate/:status",
    component: DiagnostiqueDevisComponent,
  },
  {
    path: "list-car-wait",
    component: ListCarWaitComponent,
  },
  {
    path: "list-car-repair",
    component: ListCarRepairComponent,
  },
  {
    path: "list-car-repair-client",
    component: ListCarRepairClientComponent,
  },
  {
    path: "detail-car-repair/:numberPlate",
    component: DetailCarRepairClientComponent,
  },
  {
    path: "devis-diagnostique/:numberPlate/:status",
    component: DiagnostiqueDevisComponent,
  },
  {
    path: "accueil-finance",
    component: AccueilFinanceComponent,
  },
  {
    path: "car-finish-deliver",
    component: CarFinishDeliverComponent,
  },
  {
    path: "car-depot-client/:clientEmail",
    component: CarDepotClientComponent,
  },
  {
    path: "chiffre-affaire",
    component: ChiffreAffaireComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
