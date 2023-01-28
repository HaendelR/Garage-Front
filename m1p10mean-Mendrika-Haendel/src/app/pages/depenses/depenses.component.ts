import { Component, OnInit } from '@angular/core';
import { ChargeDetail } from 'src/app/models/charge-detail';
import { Users } from 'src/app/models/users';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ChargeDetailService } from 'src/app/services/charge-detail.service';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit{

  userGarage!: Users[];
  cdetail!: ChargeDetail;

  ugarage!: string;
  intitule: string = 'loyer';
  garageName!: string | null;
  garageLocation!: string | null;
  montant!: number;
  message!: string;

  constructor(
    private authservice: AuthentificationService,
    private chargedetailservice: ChargeDetailService
  ) { }

  userme() {
    this.authservice.userconnecte()
    .subscribe({
      next: data => {

        this.garageName = data.garageName;
        this.garageLocation = data.garageLocation;

        this.authservice.getUserByGarage(this.garageName, this.garageLocation)
        .subscribe({
          next: data => {
            this.userGarage = data;
          },
          error: e => {
            console.log(e);
          }
        })
      }, 
      error: e => {
        console.log(e);
      }
    })
  }

  ngOnInit(): void {
      this.userme()
  }

  submit() {

    var user!: string[];

    if(this.ugarage !== undefined) {
      user = this.ugarage.split(':');
    }

    if(this.intitule === 'loyer') {

      var cadetail = {
        intitule: this.intitule,
        dateTimeCharge: new Date(),
        garageName: this.garageName,
        garageLocation : this.garageLocation,
        garageRent: this.montant,
        userName: null,
        userSurname: null,
        userEmail: null,
        userSalary: null,
        amount: this.montant
      }

      this.cdetail = cadetail;
    } 

    if(this.intitule === 'salaire') {

      var caetail = {
        intitule: this.intitule,
        dateTimeCharge: new Date(),
        garageName: this.garageName,
        garageLocation : this.garageLocation,
        garageRent: null,
        userName: user[0],
        userSurname: user[1],
        userEmail: user[2],
        userSalary: this.montant,
        amount: this.montant
      }

      this.cdetail = caetail;


    }

    if(this.intitule === 'achatPiece') {
      var cadeail = {
        intitule: this.intitule,
        dateTimeCharge: new Date(),
        garageName: this.garageName,
        garageLocation : this.garageLocation,
        garageRent: null,
        userName: null,
        userSurname: null,
        userEmail: null,
        userSalary: null,
        amount: this.montant
      }

      this.cdetail = cadeail;
    } 

    if(this.intitule === 'autre') {
      var cadetil = {
        intitule: this.intitule,
        dateTimeCharge: new Date(),
        garageName: this.garageName,
        garageLocation : this.garageLocation,
        amount: this.montant,
        garageRent: null,
        userName: null,
        userSurname: null,
        userEmail: null,
        userSalary: null,
      }
      this.cdetail = cadetil;
    }

    this.chargedetailservice.insertChargeDetail(this.cdetail)
    .subscribe({
      next: data => {
        console.log(data);
        this.message = "Dépenses insérées";
      },
      error: e => {
        console.log(e);
        this.message = "Dépenses non insérées! ERREUR";
      }
    })

  }
}
