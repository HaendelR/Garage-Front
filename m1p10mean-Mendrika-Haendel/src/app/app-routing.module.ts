import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { SigningPageComponent } from "./pages/Public/signingpage/signing.component";
import { ReceptionCarComponent } from "./pages/Private/reception-car/reception-car.component";
import { RegisterpageComponent } from "./pages/Public/registerpage/registerpage.component";

import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { ContactUspageComponent } from "./pages/Public/contactuspage/contactus.component";
import { ProfilepageComponent } from "./pages/Private/profilepage/profilepage.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "receptionCar", component: ReceptionCarComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "signing", component: SigningPageComponent },

  { path: "contact-us", component: ContactUspageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "profile", component: ProfilepageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
