import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class DetailCarRepairClientService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getCarRepair(
    numberPlate: string | null,
    status: string,
    clientName: string | null,
    clientSurname: string | null
  ): Observable<CarRepair> {
    const url = `${this.server.getUrl()}/carRepair/carRepairStatusNumberPlateClient/${numberPlate}/${status}/${clientName}/${clientSurname}`;

    return this.httpClient.get<CarRepair>(url);
  }
}
