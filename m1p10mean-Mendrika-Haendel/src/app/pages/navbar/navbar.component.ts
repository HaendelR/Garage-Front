import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthentificationService } from "src/app/services/authentification.service";
import { Users } from "src/app/models/users";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  checkbar = false;
  me!: Users;

  constructor(
    private router: Router,
    private authservice: AuthentificationService
  ) {}

  // check() {
  //   const token = localStorage.getItem('tokenUser');
  //   if(token) {
  //     this.checkbar = true;
  //   } else {
  //     this.checkbar = false;
  //   }
  // }

  async userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
        this.checkbar = true;
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  ngOnInit(): void {
    this.userme();
  }

  logout() {
    localStorage.removeItem("tokenUser");
    this.router.navigate([""]);
  }
}
