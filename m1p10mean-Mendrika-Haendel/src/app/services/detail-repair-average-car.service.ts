import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class DetailRepairAverageCarService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getCarRepair(
    numberPlate: string | null,
    dateTimeStop: string | null
  ): Observable<CarRepair> {
    const url = `${this.server.getUrl()}/carRepair/carRepairNumberPlateAndDateStop/${numberPlate}/${dateTimeStop}`;

    return this.httpClient.get<CarRepair>(url);
  }
}
