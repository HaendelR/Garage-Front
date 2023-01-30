import { Component } from "@angular/core";
import { CarRepair } from "src/app/models/car-repair";
import { Router } from "@angular/router";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { ListCarRepairService } from "src/app/services/list-car-repair.service";

@Component({
  selector: "app-list-car-repair",
  templateUrl: "./list-car-repair.component.html",
  styleUrls: ["./list-car-repair.component.css"],
})
export class ListCarRepairComponent {
  me!: Users;
  carRepair!: CarRepair[];
  isLoading = true;

  constructor(
    private authservice: AuthentificationService,
    private listCarRepairservice: ListCarRepairService,
    private router: Router
  ) {}

  term = "";
  searchTerm = "";

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        this.listCarRepairservice
          .getAllCarRepair(
            "EnReparation",
            this.me.garageLocation,
            this.me.garageName
          )
          .subscribe({
            next: (data) => {
              this.carRepair = data;
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

  reparationCar(numberPlate: string) {
    this.router.navigate(["reparation-car/" + numberPlate]);
  }
}
