import { Component } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";
import { ActivatedRoute } from "@angular/router";
import { DetailCarRepairClientService } from "src/app/services/detail-car-repair-client.service";
import { HistoryRepairDetailService } from "src/app/services/history-repair-detail.service";

@Component({
  selector: "app-history-repair-detail",
  templateUrl: "./history-repair-detail.component.html",
  styleUrls: ["./history-repair-detail.component.css"],
})
export class HistoryRepairDetailComponent {
  constructor(
    private authservice: AuthentificationService,
    private carDetailsReparation: HistoryRepairDetailService,
    private route: ActivatedRoute
  ) {}
  numberPlate = this.route.snapshot.paramMap.get("numberPlate");
  user!: Users;
  carRep!: CarRepair;
  timeRepair = 0;
  isLoading = true;
  unite = "";

  getCar() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.carDetailsReparation
          .getCarRepair(
            this.numberPlate,
            "Terminer",
            this.user.name,
            this.user.surname
          )
          .subscribe({
            next: (data) => {
              this.carRep = data;
              if (data.duration)
                if (data.duration >= 60) {
                  this.timeRepair = Number(
                    Number(Math.round(data.duration) / 60).toFixed(2)
                  );
                  this.unite = "H.Min";
                } else {
                  this.timeRepair = Number(Math.round(data.duration));
                  this.unite = "Min";
                }
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
  async ngOnInit(): Promise<void> {
    this.getCar();
  }
}
