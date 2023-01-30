import { Component } from "@angular/core";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";
import { CarRepair } from "src/app/models/car-repair";
import { ReparationCarService } from "src/app/services/reparation-car.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ContentMail } from "src/app/models/content-mail";

@Component({
  selector: "app-reparation-car",
  templateUrl: "./reparation-car.component.html",
  styleUrls: ["./reparation-car.component.css"],
})
export class ReparationCarComponent {
  constructor(
    private authservice: AuthentificationService,
    private carReparation: ReparationCarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  numberPlate = this.route.snapshot.paramMap.get("numberPlate");
  advance: any = {};
  user!: Users;
  carRep!: CarRepair;
  error = "";
  inProgress = [""];
  finish = [""];
  message = "";
  contentMail!: ContentMail;
  isLoading = true;
  isLoadingButton = false;
  button = "Valider";

  getCar() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.user = data;
        return this.carReparation
          .getCarRepair(
            this.numberPlate,
            "EnReparation",
            this.user.garageLocation,
            this.user.garageName
          )
          .subscribe({
            next: (data) => {
              this.carRep = data;
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

  async changeProgress(pr: string, progress: number) {
    this.isLoadingButton = true;
    this.button = "Traitement en cours";
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
    }
    if (progress < this.advance && this.advance < 100) {
      this.carReparation
        .updateProgressCarProblem(
          this.numberPlate,
          pr,
          this.advance,
          globalProgress
        )
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
        .updateProgressCarProblem(
          this.numberPlate,
          pr,
          this.advance,
          globalProgress
        )
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
      this.carReparation
        .updateStatusCarProblem(this.numberPlate, pr, "Terminer")
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => {
            console.log(e);
          },
        });
    } else if (progress > this.advance) {
      this.error = "L'avancement saisi est inférieur à l'avancement actuel";
    } else if (this.advance > 100) {
      this.error =
        "Réparation déja terminer ou l'avancement saisie est supérieur à 100";
    }
    this.getCar();

    setTimeout(() => {
      this.isLoadingButton = false;
      this.button = "Valider";
    }, 5000);
  }

  terminer() {
    var mail = {
      to: this.carRep.clientEmail,
      subject: "Réparation terminer",
      text: `Marque du vehicule : ${this.carRep.carMark}.<br>Matricule du vehicule : ${this.carRep.numberPlate}.
      <br>Model du vehicule : ${this.carRep.carModel}.<br>Couleur du vehicule : ${this.carRep.color}.<br>
      La réparation de votre voiture est terminer.<br>`,
    };
    this.contentMail = mail;
    this.carReparation.sendEmail(this.contentMail).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
    this.carReparation
      .updateStatusCarRepairAndDateFinishAndDuration(
        this.numberPlate,
        "EnReparation",
        "Terminer"
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(["/list-car-repair"]);
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
