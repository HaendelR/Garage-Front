import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Invoice } from "src/app/models/invoice";
import { InvoiceService } from "src/app/services/invoice.service";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-diagnostique-devis",
  templateUrl: "./diagnostique-devis.component.html",
  styleUrls: ["./diagnostique-devis.component.css"],
})
export class DiagnostiqueDevisComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private invoiceservice: InvoiceService,
    private authservice: AuthentificationService
  ) {}

  numberPlate = this.route.snapshot.paramMap.get("numberPlate");
  status = this.route.snapshot.paramMap.get("status");
  invoice!: Invoice;
  me!: Users;
  message = "";

  ngOnInit(): void {
    this.invoiceMatriculeStatus(), this.userme();
  }

  invoiceMatriculeStatus() {
    this.invoiceservice
      .invoiceByMatriculeAndStatus(this.numberPlate, this.status)
      .subscribe({
        next: (data) => {
          this.invoice = data;
        },
        error: (e) => {
          console.log(e);
        },
      });
  }

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  validPayment() {
    this.invoiceservice
      .updateCarRepairStatusInvoiceAndStatusCarDepotAndStatusCarRepair(
        this.invoice.numberPlate,
        "NonPayer",
        "diagnostiquer",
        "diagnostiquer",
        "Payer"
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        },
      });

    this.invoiceservice
      .updateInvoiceStatusNumberPlate(
        this.invoice.numberPlate,
        "NonPayer",
        "Payer"
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        },
      });

    this.message = "Payement effectuer";
  }
}
