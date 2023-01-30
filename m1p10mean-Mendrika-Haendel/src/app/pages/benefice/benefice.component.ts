import { Component, OnInit } from "@angular/core";
import { ChiffreAffaireMois } from "src/app/models/chiffre-affaire-mois";
import { TotalDepense } from "src/app/models/total-depense";
import { AuthentificationService } from "src/app/services/authentification.service";
import { ChargeDetailService } from "src/app/services/charge-detail.service";
import { InvoiceService } from "src/app/services/invoice.service";

@Component({
  selector: "app-benefice",
  templateUrl: "./benefice.component.html",
  styleUrls: ["./benefice.component.css"],
})
export class BeneficeComponent implements OnInit {
  constructor(
    private authservice: AuthentificationService,
    private invoiceservice: InvoiceService,
    private chargedetailservice: ChargeDetailService
  ) {}

  cam!: ChiffreAffaireMois;
  ttdepense!: TotalDepense;

  garageName!: string | null;
  garageLocation!: string | null;

  annee: Array<number> = [];
  anneeNow: string = "" + new Date().getFullYear();
  moisNow: string = "" + (new Date().getMonth() + 1);
  yearNow = new Date().getFullYear();

  benefice!: number;

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.garageName = data.garageName;
        this.garageLocation = data.garageLocation;

        this.invoiceservice
          .getChiffreAffaireMois(
            this.garageName,
            this.garageLocation,
            this.moisNow,
            this.anneeNow
          )
          .subscribe({
            next: (data) => {
              this.cam = data[0];
            },
          });

        this.chargedetailservice
          .totalDepenseMois(
            this.garageName,
            this.garageLocation,
            this.moisNow,
            this.anneeNow
          )
          .subscribe({
            next: (data) => {
              this.ttdepense = data[0];
              if (this.ttdepense && this.cam) {
                this.benefice =
                  this.cam.chiffreaffaire - this.ttdepense.totaldepense;
              } else {
                this.benefice = 0;
              }
            },
          });
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  getAnnee() {
    for (var i = 1999; i <= this.yearNow; i++) {
      this.annee.push(i);
    }
  }

  stringMonthDate(month: string) {
    var result = "";
    switch (month) {
      case "1":
        result = "Janvier";
        break;
      case "2":
        result = "Février";
        break;
      case "3":
        result = "Mars";
        break;
      case "4":
        result = "Avril";
        break;
      case "5":
        result = "Mai";
        break;
      case "6":
        result = "Juin";
        break;
      case "7":
        result = "Juillet";
        break;
      case "8":
        result = "Août";
        break;
      case "9":
        result = "Septembre";
        break;
      case "10":
        result = "Octobre";
        break;
      case "11":
        result = "Novembre";
        break;
      case "12":
        result = "Décembre";
        break;
    }

    return result;
  }

  ngOnInit(): void {
    this.userme(), this.getAnnee();
  }

  getBenefice() {
    this.invoiceservice
      .getChiffreAffaireMois(
        this.garageName,
        this.garageLocation,
        this.moisNow,
        this.anneeNow
      )
      .subscribe({
        next: (data) => {
          this.cam = data[0];
        },
      });

    this.chargedetailservice
      .totalDepenseMois(
        this.garageName,
        this.garageLocation,
        this.moisNow,
        this.anneeNow
      )
      .subscribe({
        next: (data) => {
          this.ttdepense = data[0];
          if (this.ttdepense && this.cam) {
            this.benefice =
              this.cam.chiffreaffaire - this.ttdepense.totaldepense;
          } else {
            this.benefice = 0;
          }
        },
      });
  }
}
