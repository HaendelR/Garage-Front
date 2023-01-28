import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargeDetail } from '../models/charge-detail';
import { TotalDepense } from '../models/total-depense';
import { Server } from '../server';

@Injectable({
  providedIn: 'root'
})
export class ChargeDetailService {

  constructor(
    private httpClient: HttpClient,
    private server: Server
  ) { }

  insertChargeDetail(chargeDetail: ChargeDetail): Observable<ChargeDetail> {
    const url = `${this.server.getUrl()}/chargeDetail/addChargeDetail`;

    return this.httpClient.post<ChargeDetail>(url, chargeDetail);
  }

  totalDepenseMois(
    garageName: string | null,
    garageLocation: string | null,
    mois: string,
    annee: string
  ): Observable<TotalDepense[]> {
    const url = `${this.server.getUrl()}/chargeDetail/depensemois/`+mois+`/`+annee+`/`+garageName+`/`+garageLocation;

    return this.httpClient.get<TotalDepense[]>(url);
  }
}
