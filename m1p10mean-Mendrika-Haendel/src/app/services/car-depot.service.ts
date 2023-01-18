import { Injectable } from "@angular/core";
import { CarDepot } from "../models/car-depot";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthentificationService } from "./authentification.service";
import { Server } from "../server";

@Injectable({
  providedIn: "root",
})
export class CarDepotService {
  constructor(
    private httpClient: HttpClient,
    private userservice: AuthentificationService,
    private server: Server
  ) {}
  insertCarDepot(cardepot: CarDepot): Observable<CarDepot> {
    const urlCardepot = `${this.server.getUrl()}/carDepot/addCarDepot`;
    return this.httpClient.post<CarDepot>(urlCardepot, cardepot);
  }

  getCarDepose(
    garageName: string | null,
    garageLocation: string | null
  ): Observable<CarDepot[]> {
    const urlcardepot =
      `${this.server.getUrl()}/carDepot/carDepose/` + garageName + "/" + garageLocation;

    return this.httpClient.get<CarDepot[]>(urlcardepot);
  }

  getCarDepotByMatricule(matricule: string | null): Observable<CarDepot> {
    const url =
      `${this.server.getUrl()}/carDepot/carDepotByMatricule/` + matricule;

    return this.httpClient.get<CarDepot>(url);
  }
}
