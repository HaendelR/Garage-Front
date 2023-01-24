import { Component } from "@angular/core";
import { CarRepair } from "src/app/models/car-repair";
import { Router } from "@angular/router";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { ListCarRepairClientService } from "src/app/services/list-car-repair-client.service";

@Component({
  selector: "app-list-car-repair-client",
  templateUrl: "./list-car-repair-client.component.html",
  styleUrls: ["./list-car-repair-client.component.css"],
})
export class ListCarRepairClientComponent {
  me!: Users;
  carRepair!: CarRepair[];

  constructor(
    private authservice: AuthentificationService,
    private listCarRepairservice: ListCarRepairClientService,
    private router: Router
  ) {}

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        console.log("test", this.me);
        console.log(this.me.garageLocation);
        this.listCarRepairservice
          .getAllCarRepair("EnReparation", this.me.name, this.me.surname)
          .subscribe({
            next: (data) => {
              this.carRepair = data;
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

  detailsProgressRepair(numberPlate: string) {
     this.router.navigate(["detail-car-repair/" + numberPlate]);
  }
}
