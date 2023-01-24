import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class ListCarWaitService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getAllCarRepairWait(
    status: string,
    garageLocation: string | null,
    garageName: string | null
  ): Observable<CarRepair[]> {
    const url = `${this.server.getUrl()}/carRepair/carRepairStatusAndGarage/${status}/${garageLocation}/${garageName}`;

    return this.httpClient.get<CarRepair[]>(url);
  }

  updateCarRepairStatus(
    matricule: string | null,
    currentStatus: string | null,
    updateStatus: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carRepair/updateCarRepairStatus`;
    var body = {
      numberPlate: matricule,
      currentStatus: currentStatus,
      updateStatus: updateStatus,
    };
    return this.httpClient.put<any>(url, body);
  }
}
