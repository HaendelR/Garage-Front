import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Garage } from "../models/garage";
import { Server } from "../server";

@Injectable({
  providedIn: "root",
})
export class GarageService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getGarages(): Observable<Garage[]> {
    const url = `${this.server.getUrl()}/garage/allGarage`;

    return this.httpClient.get<Garage[]>(url);
  }
}
