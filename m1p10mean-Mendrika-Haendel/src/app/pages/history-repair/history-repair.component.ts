import { Component } from "@angular/core";
import { CarRepair } from "src/app/models/car-repair";
import { Router } from "@angular/router";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { HistoryRepairService } from "src/app/services/history-repair.service";

@Component({
  selector: 'app-history-repair',
  templateUrl: './history-repair.component.html',
  styleUrls: ['./history-repair.component.css']
})
export class HistoryRepairComponent {
  me!: Users;
  carRepair!: CarRepair[];

  constructor(
    private authservice: AuthentificationService,
    private listCarRepairservice: HistoryRepairService,
    private router: Router
  ) {}

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        this.listCarRepairservice
          .getAllCarRepair("Terminer", this.me.name, this.me.surname)
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

  detailsHistoryRepair(numberPlate: string) {
     this.router.navigate(["detail-car-history/" + numberPlate]);
  }
}
