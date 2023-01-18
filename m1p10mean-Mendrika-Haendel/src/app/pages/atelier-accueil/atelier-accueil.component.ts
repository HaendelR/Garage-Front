import { Component, OnInit } from '@angular/core';
import { CarDepot } from 'src/app/models/car-depot';
import { Users } from 'src/app/models/users';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CarDepotService } from 'src/app/services/car-depot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atelier-accueil',
  templateUrl: './atelier-accueil.component.html',
  styleUrls: ['./atelier-accueil.component.css']
})
export class AtelierAccueilComponent implements OnInit {

  me!: Users;
  carDepot!: CarDepot[];
  
  constructor(
    private authservice: AuthentificationService,
    private cardepotservice: CarDepotService,
    private router : Router
  ) { }

  userme() {
    this.authservice.userconnecte()
    .subscribe({
      next : data => {
       this.me=data;
       console.log(this.me.garageLocation);
       this.cardepotservice.getCarDepose(this.me.garageName, this.me.garageLocation)
       .subscribe({
          next: data => {
            this.carDepot = data;
          },
          error: e => {

          }
        });
      },
      error: (e) => {
        console.log(e.error);
      }
    });
  }

  ngOnInit(): void {
    this.userme()
    // this.carDepose("garage2", "Tsiadana")
  }

  valueCar(a: CarDepot) {
    console.log(a.numberPlate);
    this.router.navigate(['diagnostic-form/'+a.numberPlate]);
  }
}
