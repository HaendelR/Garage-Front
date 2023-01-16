import { Component, OnInit } from '@angular/core';
import { CarDepot } from 'src/app/models/car-depot';
import { Users } from 'src/app/models/users';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CarDepotService } from 'src/app/services/car-depot.service';

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
    private cardepotservice: CarDepotService
  ) { }

  userme() {
    this.authservice.userconnecte()
    .subscribe({
      next : data => {
       this.me=data;
       console.log(this.me.garageLocation)
      },
      error: (e) => {
        console.log(e.error);
      }
    });
  }

  carDepose(garageName: string | null, garageLocation: string | null) {
    this.cardepotservice.getCarDepose(garageName, garageLocation)
    .subscribe({
      next: data => {
        this.carDepot = data;
      },
      error: e => {

      }
    });
  }

  ngOnInit(): void {
    this.userme(),
    this.carDepose("garage2", "Tsiadana")
  }
}
