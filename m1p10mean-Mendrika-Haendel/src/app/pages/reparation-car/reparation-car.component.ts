import { Component } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";
import { ReparationCarService } from "src/app/services/reparation-car.service";

@Component({
  selector: "app-reparation-car",
  templateUrl: "./reparation-car.component.html",
  styleUrls: ["./reparation-car.component.css"],
})
export class ReparationCarComponent {
  constructor(
    private authservice: AuthentificationService,
    private carReparation: ReparationCarService
  ) {}
  advance: any = {};
  user!: Users;
  carRep!: CarRepair;
  error = "";
  inProgress = [""];
  finish = [""];
  message = "";

  getCar() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.carReparation
          .getCarRepair(
            "1234TBB",
            "EnAttente",
            this.user.garageLocation,
            this.user.garageName
          )
          .subscribe({
            next: (data) => {
              this.carRep = data;
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

  async changeProgress(pr: string, progress: number) {
    let totalProgressPr = 0;
    let globalProgress = 0;

    for (var i = 0; i < this.carRep.carProblem.length; i++) {
      totalProgressPr = this.carRep.carProblem[i].progress + totalProgressPr;
    }
    if (totalProgressPr === 0) {
      totalProgressPr = this.advance;
      globalProgress = totalProgressPr / this.carRep.carProblem.length;
    } else {
      totalProgressPr = totalProgressPr - progress + this.advance;
      globalProgress = totalProgressPr / this.carRep.carProblem.length;
    }
    if (globalProgress == 100) {
      this.message = "Réparation terminer :)";
      this.carReparation
        .updateStatusCarRepairAndDateFinishAndDuration(
          "1234TBB",
          "EnAttente",
          "Terminer",
          new Date(),
          new Date()
        )
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
    if (progress < this.advance && this.advance < 100) {
      this.carReparation
        .updateProgressCarProblem("1234TBB", pr, this.advance, globalProgress)
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
    } else if (this.advance === 100) {
      this.carReparation
      //   .updateProgressCarProblem("1234TBB", pr, this.advance, globalProgress)
      //   .subscribe({
      //     next: (data) => {
      //       console.log(data);
      //     },
      //     error: (e) => {
      //       console.log(e);
      //     },
      //   });
      // this.carReparation
      //   .updateStatusCarProblem("1234TBB", pr, "Terminer")
      //   .subscribe({
      //     next: (data) => {
      //       console.log(data);
      //     },
      //     error: (e) => {
      //       console.log(e);
      //     },
      //   });
    } else if (progress > this.advance) {
      this.error = "L'avancement saisi est inférieur à l'avancement actuel";
    } else if (this.advance > 100) {
      this.error =
        "Réparation déja terminer ou l'avancement saisie est supérieur à 100";
    }
    this.getCar();
  }

  async ngOnInit(): Promise<void> {
    this.getCar();
  }
}
