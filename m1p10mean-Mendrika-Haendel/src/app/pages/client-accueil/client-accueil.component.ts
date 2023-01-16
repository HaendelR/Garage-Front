import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDepot } from 'src/app/models/car-depot';
import { Garage } from 'src/app/models/garage';
import { Users } from 'src/app/models/users';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CarDepotService } from 'src/app/services/car-depot.service';
import { CarService } from 'src/app/services/car.service';
import { GarageService } from 'src/app/services/garage.service';

@Component({
  selector: 'app-client-accueil',
  templateUrl: './client-accueil.component.html',
  styleUrls: ['./client-accueil.component.css']
})
export class ClientAccueilComponent implements OnInit{

  me!: Users;
  voiture!: Car;
  voitureDepot!: CarDepot;
  garages!: Garage[];
  carMark='';
  carModel='';
  numberPlate='';
  color='';
  description='';
  garage='';

  constructor(
    private authservice: AuthentificationService,
    private carservice: CarService,
    private cardepotservice: CarDepotService,
    private garageservice: GarageService
  ) { }


  userme() {
    this.authservice.userconnecte()
    .subscribe({
      next : data => {
       this.me=data;
      },
      error: (e) => {
        console.log(e.error);
      }
    });
  }

  getGarages() {
    this.garageservice.getGarages()
    .subscribe({
      next: data => {
        this.garages = data;
      },
      error: e => {
        console.log(e.error);
      }
    });
  }

  ngOnInit(): void {
    this.userme(),
    this.getGarages()
  }

  depotVoiture() {
    var car = {
      clientName : this.me.name,
      clientSurname : this.me.surname,
      clientContact : this.me.numberPhone,
      carMark : this.carMark,
      carModel : this.carModel,
      color : this.color,
      numberPlate : this.numberPlate
    };

    this.voiture = car;

    this.carservice.insertCar(this.voiture)
    .subscribe({
      next : data => {
        console.log(data);
      },
      error: e => {
        console.log(e.error.error);
      }
    });

    var gg = this.garage.split(':');

    var cardepot = {
      garageName: gg[0],
      garageLocation: gg[1],
      clientName: this.me.name,
      clientSurname: this.me.surname,
      clientContact: this.me.numberPhone,
      carMark: this.carMark,
      carModel: this.carModel,
      color: this.color,
      numberPlate: this.numberPlate,
      description: this.description,
      status: "depose"
    }

    this.voitureDepot = cardepot;

    this.cardepotservice.insertCarDepot(this.voitureDepot)
    .subscribe({
      next : data => {
        console.log(data);
      },
      error : e => {
        console.log(e.error.error);
      }
    });
  }

}
