import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "../models/token";
import { Users } from "../models/users";
import { Server } from "../server";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  login(login: string, mdp: string): Observable<Token> {
    const urlLogin = `${this.server.getUrl()}/user/login`;
    const infos = {
      email: login,
      password: mdp,
    };

    return this.httpClient.post<Token>(urlLogin, infos);
  }

  userconnecte(): Observable<Users> {
    const token = localStorage.getItem("tokenUser");
    const urlUser = `${this.server.getUrl()}/user/me`;
    var headers = new HttpHeaders();
    if (token) {
      headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      });
    }

    return this.httpClient.get<Users>(urlUser, {
      headers: headers,
    });
  }

  inscription(utilisateur: Users): Observable<Users> {
    const urlSignup = `${this.server.getUrl()}/user/adduser`;
    return this.httpClient.post<Users>(urlSignup, utilisateur);
  }
}
