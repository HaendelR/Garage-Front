import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Invoice } from "src/app/models/invoice";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { InvoiceService } from "src/app/services/invoice.service";

@Component({
  selector: "app-accueil-finance",
  templateUrl: "./accueil-finance.component.html",
  styleUrls: ["./accueil-finance.component.css"],
})
export class AccueilFinanceComponent implements OnInit {
  me!: Users;
  invoices!: Invoice[];
  isLoading = true;

  constructor(
    private authservice: AuthentificationService,
    private invoiceservice: InvoiceService,
    private router: Router
  ) {}

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        this.invoiceservice
          .findInvoiceByGarage(this.me.garageName, this.me.garageLocation)
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
