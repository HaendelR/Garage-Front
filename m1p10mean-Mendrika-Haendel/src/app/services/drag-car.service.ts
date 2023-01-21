import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class DragCarService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getCarRepair(
    numberPlate: string | null,
    status: string,
    garageLocation: string | null,
    garageName: string | null
  ): Observable<CarRepair> {
    const url = `${this.server.getUrl()}/carRepair/carRepairStatusGarage/${numberPlate}/${status}/${garageLocation}/${garageName}`;

    return this.httpClient.get<CarRepair>(url);
  }
  updateStatusCarProblem(
    matricule: string | null,
    entitled: string | null,
    status: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carRepair/updateCarRepairProblem`;
    var body = {
      numberPlate: matricule,
      entitled: entitled,
      status: status,
    };
    return this.httpClient.put<any>(url, body);
  }
}
