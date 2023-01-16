import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../models/token';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient) { }

  login(login: string, mdp: string): Observable<Token> {
    const url = "http://localhost:3000/user/login";

    const infos = {
      "email": login,
      "password": mdp
    };

    return this.httpClient.post<Token>(url, infos);
  }

  userconnecte(): Observable<Users> {
    const url = "http://localhost:3000/user/me";

    const token = localStorage.getItem("tokenUser");
    var headers = new HttpHeaders();
    if(token) {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });

    }

    return this.httpClient.get<Users>(url, {headers: headers});

  }

  inscription(utilisateur: Users): Observable<Users> {
    const url = "http://localhost:3000/user/adduser";

    return this.httpClient.post<Users>(url, utilisateur);
  }

}
