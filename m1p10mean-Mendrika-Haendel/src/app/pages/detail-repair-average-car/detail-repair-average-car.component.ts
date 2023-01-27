import { Component } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";
import { ActivatedRoute } from "@angular/router";
import { DetailRepairAverageCarService } from "src/app/services/detail-repair-average-car.service";

@Component({
  selector: "app-detail-repair-average-car",
  templateUrl: "./detail-repair-average-car.component.html",
  styleUrls: ["./detail-repair-average-car.component.css"],
})
export class DetailRepairAverageCarComponent {
  constructor(
    private authservice: AuthentificationService,
    private carDetailsReparation: DetailRepairAverageCarService,
    private route: ActivatedRoute
  ) {}
  numberPlate = this.route.snapshot.paramMap.get("numberPlate");
  dateTimeStop = this.route.snapshot.paramMap.get("dateTimeStop");
  carRep!: CarRepair;
  averageRepair = 0;
  timeRepair = 0;

  getCar() {
    this.carDetailsReparation
      .getCarRepair(this.numberPlate, this.dateTimeStop)
      .subscribe({
        next: (data) => {
          this.carRep = data;
          if (data.duration) {
            this.averageRepair = Number(
              (data.duration / data.carProblem.length).toFixed(3)
            );
            this.timeRepair = Number(data.duration.toFixed(3));
          }
        },
        error: (e) => {
          console.log(e);
        },
      });
  }

  async ngOnInit(): Promise<void> {
    this.getCar();
  }
}
