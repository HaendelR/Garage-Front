import { Component } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";
import { ActivatedRoute } from "@angular/router";
import { DetailCarRepairClientService } from "src/app/services/detail-car-repair-client.service";
@Component({
  selector: "app-detail-car-repair-client",
  templateUrl: "./detail-car-repair-client.component.html",
  styleUrls: ["./detail-car-repair-client.component.css"],
})
export class DetailCarRepairClientComponent {
  constructor(
    private authservice: AuthentificationService,
    private carDetailsReparation: DetailCarRepairClientService,
    private route: ActivatedRoute
  ) {}
  numberPlate = this.route.snapshot.paramMap.get("numberPlate");
  user!: Users;
  carRep!: CarRepair;

  getCar() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.carDetailsReparation
          .getCarRepair(
            this.numberPlate,
            "EnReparation",
            this.user.name,
            this.user.surname
          )
          .subscribe({
            next: (data) => {
              this.carRep = data;
              console.log(data);
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
  async ngOnInit(): Promise<void> {
    this.getCar();
  }
}
