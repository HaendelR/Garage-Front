import { Component, OnInit } from '@angular/core';
import { ChiffreAffaireJour } from 'src/app/models/chiffre-affaire-jour';
import { ChiffreAffaireMois } from 'src/app/models/chiffre-affaire-mois';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-chiffre-affaire',
  templateUrl: './chiffre-affaire.component.html',
  styleUrls: ['./chiffre-affaire.component.css']
})
export class ChiffreAffaireComponent implements OnInit{

  annee: Array<number> = [];
  yearNow = new Date().getFullYear();
  monthNow = new Date().getMonth();
  dateNow = new Date().getFullYear()+"-"+(this.getMonthDate(new Date().getMonth()+1))+"-"+new Date().getDate();

  dateJour : string = this.dateNow;
  anneeNow : string = ""+this.yearNow;
  moisNow : string = ""+(new Date().getMonth()+1);

  garageName!: string | null;
  garageLocation!: string | null;
  caj!: ChiffreAffaireJour;
  cam!: ChiffreAffaireMois;

  constructor(
    private authservice: AuthentificationService,
    private invoiceservice: InvoiceService
  ) {}

  getAnnee() {
    for(var i=1999; i<=this.yearNow; i++) {
      this.annee.push(i);
    }
    console.log("dateAjd :"+this.dateNow);
  }

  getMonthDate(month: number) {
    var result = "";

    if(month < 10) {
      result = "0"+month;
    } else {
      result = ""+month;
    }

    return result;
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

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.garageName = data.garageName;
        this.garageLocation = data.garageLocation;

        this.invoiceservice.getChiffreAffaireJour(this.garageName, this.garageLocation, this.dateJour)
        .subscribe({
          next: data => {
            this.caj = data[0];
          }
        })

        this.invoiceservice.getChiffreAffaireMois(this.garageName, this.garageLocation, this.moisNow, this.anneeNow)
        .subscribe({
          next: data => {
            this.cam = data[0];
          }
        })
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }


  ngOnInit(): void {
      this.getAnnee(),
      this.userme()
  }

  getCAJ() {
    this.invoiceservice.getChiffreAffaireJour(this.garageName, this.garageLocation, this.dateJour)
    .subscribe({
      next: data => {
        this.caj = data[0];
      }
    })
  }

  getCAM() {
    this.invoiceservice.getChiffreAffaireMois(this.garageName, this.garageLocation, this.moisNow, this.anneeNow)
    .subscribe({
      next: data => {
        this.cam = data[0];
      }
    })
  }
}
