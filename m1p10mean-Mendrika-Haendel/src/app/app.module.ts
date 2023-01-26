import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { ClientAccueilComponent } from "./pages/client-accueil/client-accueil.component";
import { AtelierAccueilComponent } from "./pages/atelier-accueil/atelier-accueil.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";
import { FormDiagnosticComponent } from "./pages/form-diagnostic/form-diagnostic.component";
import { VoitureDiagnostiquesComponent } from "./pages/voiture-diagnostiques/voiture-diagnostiques.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { VoitureDiagnostiquesAtelierComponent } from "./pages/voiture-diagnostiques-atelier/voiture-diagnostiques-atelier.component";
import { ReparationCarComponent } from "./pages/reparation-car/reparation-car.component";
import { DiagnostiqueDevisComponent } from "./pages/diagnostique-devis/diagnostique-devis.component";
import { ListCarWaitComponent } from "./pages/list-car-wait/list-car-wait.component";
import { ListCarRepairComponent } from "./pages/list-car-repair/list-car-repair.component";
import { ListCarRepairClientComponent } from "./pages/list-car-repair-client/list-car-repair-client.component";
import { DetailCarRepairClientComponent } from "./pages/detail-car-repair-client/detail-car-repair-client.component";
import { AccueilFinanceComponent } from "./pages/accueil-finance/accueil-finance.component";
import { CarFinishDeliverComponent } from "./pages/car-finish-deliver/car-finish-deliver.component";
import { CarDepotClientComponent } from "./pages/car-depot-client/car-depot-client.component";
import { RepairAverageCarComponent } from "./pages/repair-average-car/repair-average-car.component";
import { DetailRepairAverageCarComponent } from "./pages/detail-repair-average-car/detail-repair-average-car.component";
import { ChiffreAffaireComponent } from "./pages/chiffre-affaire/chiffre-affaire.component";

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
    ReparationCarComponent,
    VoitureDiagnostiquesAtelierComponent,
    VoitureDiagnostiquesAtelierComponent,
    DiagnostiqueDevisComponent,
    ListCarWaitComponent,
    ListCarRepairComponent,
    ListCarRepairClientComponent,
    DetailCarRepairClientComponent,
    AccueilFinanceComponent,
    CarFinishDeliverComponent,
    CarDepotClientComponent,
    RepairAverageCarComponent,
    DetailRepairAverageCarComponent,
    ChiffreAffaireComponent,
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
