import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";
import { ContentMail } from "../models/content-mail";

@Injectable({
  providedIn: "root",
})
export class ReparationCarService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  sendEmail(contentMail: ContentMail): Observable<ContentMail> {
    const url = `${this.server.getUrl()}/sendMail`;
    return this.httpClient.post<ContentMail>(url, contentMail);
  }

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

  updateStatusCarRepairAndDateFinishAndDuration(
    matricule: string | null,
    currentStatus: string | null,
    updateStatus: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carRepair/updateStatusCarRepairAndDateFinishAndDuration`;
    var body = {
      numberPlate: matricule,
      currentStatus: currentStatus,
      updateStatus: updateStatus,
    };
    return this.httpClient.put<any>(url, body);
  }

  updateProgressCarProblem(
    matricule: string | null,
    entitled: string | null,
    progress: number | null,
    globalProgress: number | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carRepair/updateCarRepairAdvanceProblem`;
    var body = {
      numberPlate: matricule,
      entitled: entitled,
      progress: progress,
      globalProgress: globalProgress,
    };
    return this.httpClient.put<any>(url, body);
  }
}
