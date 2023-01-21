import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from "@angular/cdk/drag-drop";
import { DragCarService } from "src/app/services/drag-car.service";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";

@Component({
  selector: "app-drag-car",
  templateUrl: "./drag-car.component.html",
  styleUrls: ["./drag-car.component.css"],
})
export class DragCarComponent {
  constructor(
    private authservice: AuthentificationService,
    private carDrag: DragCarService
  ) {}

  user!: Users;
  carRep!: CarRepair;

  getCar() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.carDrag
          .getCarRepair(
            "1000TBE",
            "en attente",
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

  inProgress = [""];
  finish = [""];
  progress = 0;

  drop(event: CdkDragDrop<string[]>) {
    for (var i = 0; i < this.carRep.carProblem.length; i++) {
      if (
        this.carRep.carProblem[i].status === "EnCours" &&
        !this.inProgress.includes(this.carRep.carProblem[i].entitled) &&
        !this.finish.includes(this.carRep.carProblem[i].entitled)
      ) {
        this.inProgress.push(this.carRep.carProblem[i].entitled);
      } else if (
        this.carRep.carProblem[i].status === "Terminer" &&
        !this.finish.includes(this.carRep.carProblem[i].entitled)
      ) {
        this.finish.push(this.carRep.carProblem[i].entitled);
      }
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.progress =
        (this.finish.length * 100) / this.carRep.carProblem.length;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.carDrag
        .updateStatusCarProblem(
          "1000TBE",
          this.finish[event.currentIndex],
          "Terminer"
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
  }

  eventCondition(entitleProblem: CdkDrag<string>) {
    return false;
  }

  async ngOnInit(): Promise<void> {
    this.getCar();
  }
}
