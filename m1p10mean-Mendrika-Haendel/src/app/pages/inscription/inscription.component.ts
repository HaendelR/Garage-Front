import { Component } from "@angular/core";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.component.html",
  styleUrls: ["./inscription.component.css"],
})
export class InscriptionComponent {
  name = "";
  surname = "";
  numberPhone = "";
  genre = "";
  email = "";
  password = "";

  userInscrit!: Users;
  message!: string;

  constructor(
    private authservice: AuthentificationService,
    private router: Router
  ) {}

  inscription() {
    var utilisateur = {
      name: this.name,
      surname: this.surname,
      numberPhone: this.numberPhone,
      genre: this.genre,
      email: this.email,
      password: this.password,
      role: "client",
      salary: null,
      garageName: null,
      garageLocation: null,
    };

    this.userInscrit = utilisateur;

    this.authservice.inscription(this.userInscrit).subscribe({
      next: (data) => {
        this.router.navigate([""]);
      },
      error: (e) => {
        this.message = e.error.error;
      },
    });
  }

  seconnecter() {
    this.router.navigate([""]);
  }
}
