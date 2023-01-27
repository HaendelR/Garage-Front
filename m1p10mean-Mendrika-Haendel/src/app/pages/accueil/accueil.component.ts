import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  login='';
  mdp='';
  message!: string;

  constructor(
    private router : Router,
    private authservice: AuthentificationService,
  ) { }

  ngOnInit(): void {

  }

  sinscrire() {
    this.router.navigate(['inscription']);
  }

  loginClick() {
    // console.log(this.login+" "+this.mdp);
    this.authservice.login(this.login, this.mdp)
    .subscribe({
      next : data => {
        localStorage.setItem("tokenUser", data.token);
        this.authservice.userconnecte()
        .subscribe({
          next: data => {
            if(data.role === "client") this.router.navigate(['accueil-client']);
            if(data.role === "respatelier") this.router.navigate(['accueil-atelier']);
            if(data.role === "respfinance") this.router.navigate(['accueil-finance']);
          }
        });
        localStorage.setItem("tokenUser", data.token);

      },
      error: (e) => {
        this.message = e.error.error;
      }
    });
  }
}
