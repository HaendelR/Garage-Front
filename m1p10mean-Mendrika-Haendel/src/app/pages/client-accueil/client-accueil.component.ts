import { Component, OnInit } from "@angular/core";
import { Car } from "src/app/models/car";
import { CarDepot } from "src/app/models/car-depot";
import { Garage } from "src/app/models/garage";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { CarDepotService } from "src/app/services/car-depot.service";
import { CarService } from "src/app/services/car.service";
import { GarageService } from "src/app/services/garage.service";

@Component({
  selector: "app-client-accueil",
  templateUrl: "./client-accueil.component.html",
  styleUrls: ["./client-accueil.component.css"],
})
export class ClientAccueilComponent implements OnInit {
  me!: Users;
  voiture!: Car;
  voitureDepot!: CarDepot;
  garages!: Garage[];
  carMark = "";
  carModel = "";
  numberPlate = "";
  color = "";
  description = "";
  garage = "";

  isGarage=false;
  isCarMark=false;
  isNumberPlate=false;
  isCarModel=false;
  isColor=false;
  isDesc=false;

  message!: string;

  button = "Déposer";
  isLoading = false;

  constructor(
    private authservice: AuthentificationService,
    private carservice: CarService,
    private cardepotservice: CarDepotService,
    private garageservice: GarageService
  ) {}

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

  getGarages() {
    this.garageservice.getGarages().subscribe({
      next: (data) => {
        this.garages = data;
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  ngOnInit(): void {
    this.userme(), this.getGarages();
  }

  async depotVoiture() {
    if(this.garage === null || this.garage === "") this.isGarage = true; else this.isGarage = false;
    if(this.carMark === null || this.carMark === "") this.isCarMark = true; else this.isCarMark = false;
    if(this.carModel === null || this.carModel === "") this.isCarModel = true; else this.isCarModel = false;
    if(this.numberPlate === null || this.numberPlate === "") this.isNumberPlate = true; else this.isNumberPlate = false;
    if(this.color === null || this.color === "") this.isColor = true; else this.isColor = false;
    if(this.description === null || this.description === "") this.isDesc = true; else this.isDesc = false;

    if(!this.isCarMark && !this.isCarModel && !this.isColor && !this.isDesc && !this.isGarage && !this.isNumberPlate) {
      this.isLoading = true;
      this.button = "En cours";
      this.isGarage=false;
      this.isCarMark=false;
      this.isNumberPlate=false;
      this.isCarModel=false;
      this.isColor=false;
      this.isDesc=false;

      var car = {
        clientName: this.me.name,
        clientSurname: this.me.surname,
        clientContact: this.me.numberPhone,
        carMark: this.carMark,
        carModel: this.carModel,
        color: this.color,
        numberPlate: this.numberPlate,
      };

      this.voiture = car;

      this.carservice.findCar(this.voiture.numberPlate).subscribe({
        next: (data) => {
          if (data === null) {
            this.carservice.insertCar(this.voiture).subscribe({
              next: (data) => {},
              error: (e) => {
                console.log(e.error);
              },
            });

            var gg = this.garage.split(":");

            var cardepot = {
              garageName: gg[0],
              garageLocation: gg[1],
              clientName: this.me.name,
              clientSurname: this.me.surname,
              clientContact: this.me.numberPhone,
              clientEmail: this.me.email,
              carMark: this.carMark,
              carModel: this.carModel,
              color: this.color,
              numberPlate: this.numberPlate,
              description: this.description,
              status: "depose",
            };

            this.voitureDepot = cardepot;

            this.cardepotservice.insertCarDepot(this.voitureDepot).subscribe({
              next: (data) => {},
              error: (e) => {
                console.log(e.error);
              },
            });
          } else {
            var gg = this.garage.split(":");

            var cardepot = {
              garageName: gg[0],
              garageLocation: gg[1],
              clientName: this.me.name,
              clientSurname: this.me.surname,
              clientContact: this.me.numberPhone,
              clientEmail: this.me.email,
              carMark: this.carMark,
              carModel: this.carModel,
              color: this.color,
              numberPlate: this.numberPlate,
              description: this.description,
              status: "depose",
            };

            this.voitureDepot = cardepot;

            this.cardepotservice.insertCarDepot(this.voitureDepot).subscribe({
              next: (data) => {},
              error: (e) => {
                console.log(e.error);
              },
            });
          }
        },
        error: (e) => {
          console.log(e);
        },
      });

      this.message = "Votre véhicule est bien déposé pour la réparation";

      setTimeout(() => {
        this.isLoading = false;
        this.button = "Submit";
      }, 5000);
    }
  }
}
