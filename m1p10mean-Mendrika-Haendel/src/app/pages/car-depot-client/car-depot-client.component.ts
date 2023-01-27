import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CarDepot } from "src/app/models/car-depot";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { CarDepotService } from "src/app/services/car-depot.service";

@Component({
  selector: "app-car-depot-client",
  templateUrl: "./car-depot-client.component.html",
  styleUrls: ["./car-depot-client.component.css"],
})
export class CarDepotClientComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cardepotservice: CarDepotService,
    private authservice: AuthentificationService
  ) {}

  user!: Users;
  cardepot!: CarDepot[];
  term = "";
  searchTerm = "";

  getCarDepot() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.cardepotservice.carDepotClient(this.user.email).subscribe({
          next: (data) => {
            this.cardepot = data;
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
    this.getCarDepot();
  }
}
