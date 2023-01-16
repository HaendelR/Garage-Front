import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  checkbar= false;


  constructor(
    private router : Router,
  ) { }

  check() {
    const token = localStorage.getItem('tokenUser');
    if(token) {
      this.checkbar = true;
    } else {
      this.checkbar = false;
    }
  }

  ngOnInit(): void {
    this.check();
  }

  logout() {
    localStorage.setItem("tokenUser","");
    this.router.navigate(['']);
  }

}
