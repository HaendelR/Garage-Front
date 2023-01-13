import { Component, OnInit } from "@angular/core";
import { ReceptionCarService } from "./reception-car.service";
import { CarDepot } from "../../../models/CarDepot/CarDepot.model";

@Component({
  selector: "app-reception-car",
  templateUrl: "./reception-car.component.html",
  styleUrls: ["./reception-car.component.scss"],
})
export class ReceptionCarComponent implements OnInit {
  carDepot?: CarDepot[];
  currentCarDepot: CarDepot = {};
  currentIndex = -1;
  title = "";

  constructor(private receptionCar: ReceptionCarService) {}
  test() {
    console.log(this.receptionCar.getAllCar());
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.receptionCar.getAllCar().subscribe({
      next: (data) => {
        this.carDepot = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  refreshList(): void {
    this.retrieveTutorials();
    this.currentCarDepot = {};
    this.currentIndex = -1;
  }
}
