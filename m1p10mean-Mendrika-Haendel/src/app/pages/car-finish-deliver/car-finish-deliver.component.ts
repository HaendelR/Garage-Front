import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
} from "@angular/cdk/drag-drop";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";
import { CarFinishDeliverService } from "src/app/services/car-finish-deliver.service";
@Component({
  selector: "app-car-finish-deliver",
  templateUrl: "./car-finish-deliver.component.html",
  styleUrls: ["./car-finish-deliver.component.css"],
})
export class CarFinishDeliverComponent {
  constructor(
    private authservice: AuthentificationService,
    private carFinish: CarFinishDeliverService
  ) {}

  user!: Users;
  carRep!: CarRepair[];
  finish = [""];
  delivery = [""];
  testCar!: boolean;
  message = "";
  isLoading = true;

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.carFinish
          .getCarRepair(
            "Terminer",
            this.user.name,
            this.user.surname,
            "Payer",
            "diagnostiquer"
          )
          .subscribe({
            next: (data) => {
              this.carRep = data;
              for (let i = 0; i < this.carRep.length; i++) {
                if (
                  this.carRep[i].invoiceStatus === "Payer" &&
                  this.carRep[i].carDepotStatus === "diagnostiquer" &&
                  !this.delivery.includes(this.carRep[i].numberPlate) &&
                  !this.finish.includes(this.carRep[i].numberPlate)
                ) {
                  this.finish.push(this.carRep[i].numberPlate);
                } else if (
                  this.carRep[i].invoiceStatus === "Payer" &&
                  this.carRep[i].carDepotStatus === "Recuperer"
                ) {
                  this.delivery.push(this.carRep[i].numberPlate);
                }
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

  async drop(event: CdkDragDrop<string[]>) {
    this.getCar();
    var carTem = null;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      for (let i = 0; i < this.carRep.length; i++) {
        if (this.carRep[i].numberPlate === this.finish[event.currentIndex]) {
          carTem = this.carRep[i];
        }
      }
      if (
        carTem?.invoiceStatus === "Payer" &&
        carTem.carDepotStatus === "diagnostiquer"
      ) {
        this.testCar = false;
      } else {
        this.testCar = true;
      }
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.message = "Vehicule récuperer";
      this.carFinish
        .updateCarRepairStatusInvoiceAndStatusCarDepotAndStatusCarRepair(
          this.delivery[event.currentIndex],
          "Terminer",
          "Payer",
          "diagnostiquer",
          "Recuperer"
        )
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });

      this.carFinish
        .updateStatusCarDepot(
          this.delivery[event.currentIndex],
          "diagnostiquer",
          "Recuperer"
        )
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
      this.getCar();
    }
  }
  eventCondition(e: CdkDrag<string>) {
    return false;
  }
  eventPredict(e: CdkDrag<string>) {
    return true;
  }
}
