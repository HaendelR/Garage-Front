import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Invoice } from "src/app/models/invoice";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { InvoiceService } from "src/app/services/invoice.service";

@Component({
  selector: "app-voiture-diagnostiques-atelier",
  templateUrl: "./voiture-diagnostiques-atelier.component.html",
  styleUrls: ["./voiture-diagnostiques-atelier.component.css"],
})
export class VoitureDiagnostiquesAtelierComponent implements OnInit {
  me!: Users;
  invoices!: Invoice[];
  isLoading = true;

  constructor(
    private authservice: AuthentificationService,
    private invoiceservice: InvoiceService,
    private router: Router
  ) {}
  term = "";
  searchTerm = "";

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        console.log(this.me.garageLocation);
        this.invoiceservice
          .findInvoiceByUserAndGarage(
            this.me.garageName,
            this.me.garageLocation,
            this.me.name,
            this.me.surname
          )
          .subscribe({
            next: (data) => {
              this.invoices = data;
              this.isLoading = false;
            },
            error: (e) => {
              console.log(e);
            },
          });
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  ngOnInit(): void {
    this.userme();
  }

  listeDiagVehicule(numberPlate: string, status: string) {
    this.router.navigate(["devis-diagnostique/" + numberPlate + "/" + status]);
  }
}
