import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CarDepot } from "src/app/models/car-depot";
import { CarDepotService } from "src/app/services/car-depot.service";

@Component({
  selector: "app-car-depot-client",
  templateUrl: "./car-depot-client.component.html",
  styleUrls: ["./car-depot-client.component.css"],
})
export class CarDepotClientComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cardepotservice: CarDepotService
  ) {}

  email = this.route.snapshot.paramMap.get("clientEmail");

  cardepot!: CarDepot[];
  term = "";
  searchTerm = "";

  getCarDepot() {
    this.cardepotservice.carDepotClient(this.email).subscribe({
      next: (data) => {
        this.cardepot = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnInit(): void {
    this.getCarDepot();
  }
}
