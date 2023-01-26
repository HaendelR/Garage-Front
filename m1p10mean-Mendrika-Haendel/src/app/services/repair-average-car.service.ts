import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class RepairAverageCarService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getAllCarRepair(
    status: string,
    garageLocation: string | null,
    garageName: string | null
  ): Observable<CarRepair[]> {
    const url = `${this.server.getUrl()}/carRepair/carRepairStatusAndGarage/${status}/${garageLocation}/${garageName}`;

    return this.httpClient.get<CarRepair[]>(url);
  }
}
