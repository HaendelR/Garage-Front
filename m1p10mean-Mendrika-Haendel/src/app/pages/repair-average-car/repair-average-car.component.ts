import { Component } from "@angular/core";
import { CarRepair } from "src/app/models/car-repair";
import { Router } from "@angular/router";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { RepairAverageCarService } from "src/app/services/repair-average-car.service";

@Component({
  selector: "app-repair-average-car",
  templateUrl: "./repair-average-car.component.html",
  styleUrls: ["./repair-average-car.component.css"],
})
export class RepairAverageCarComponent {
  me!: Users;
  carRepair!: CarRepair[];
  isLoading = true;

  constructor(
    private authservice: AuthentificationService,
    private repairAverageService: RepairAverageCarService,
    private router: Router
  ) {}

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        this.repairAverageService
          .getAllCarRepair(
            "Terminer",
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

  detailsAverageTimeRepair(numberPlate: string, dateTimeStop: Date | null) {
    this.router.navigate([
      "detail-repair-average-car/" + numberPlate + "/" + dateTimeStop,
    ]);
  }
}
