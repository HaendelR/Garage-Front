import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargeDetail } from '../models/charge-detail';
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
}
