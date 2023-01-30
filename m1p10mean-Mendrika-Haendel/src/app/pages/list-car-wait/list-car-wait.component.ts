import { Component } from "@angular/core";
import { CarRepair } from "src/app/models/car-repair";
import { Router } from "@angular/router";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { ListCarWaitService } from "src/app/services/list-car-wait.service";

@Component({
  selector: "app-list-car-wait",
  templateUrl: "./list-car-wait.component.html",
  styleUrls: ["./list-car-wait.component.css"],
})
export class ListCarWaitComponent {
  me!: Users;
  carRepair!: CarRepair[];
  isLoading = true;

  constructor(
    private authservice: AuthentificationService,
    private listCarWaitservice: ListCarWaitService,
    private router: Router
  ) {}

  term = "";
  searchTerm = "";

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        console.log(this.me.garageLocation);
        this.listCarWaitservice
          .getAllCarRepairWait(
            "EnAttente",
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

  reparationCar(numberPlate: string, status: string) {
    this.listCarWaitservice
      .updateCarRepairStatus(numberPlate, status, "EnReparation")
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        },
      });
    this.router.navigate(["reparation-car/" + numberPlate]);
  }
}
