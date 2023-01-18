import { Injectable } from '@angular/core';
import { CarDepot } from '../models/car-depot';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CarDepotService {

  constructor(private httpClient: HttpClient,
    private userservice: AuthentificationService) { }

  insertCarDepot(cardepot: CarDepot): Observable<CarDepot> {
    const urlcardepot= "http://localhost:3000/carDepot/addCarDepot";

    return this.httpClient.post<CarDepot>(urlcardepot, cardepot);
  }

  getCarDepose(garageName: string | null, garageLocation: string | null): Observable<CarDepot[]> {

    const urlcardepot= "http://localhost:3000/carDepot/carDepose/"+garageName+"/"+garageLocation;

    return this.httpClient.get<CarDepot[]>(urlcardepot);
  }

  getCarDepotByMatricule(matricule: string | null): Observable<CarDepot> {
    const url = "http://localhost:3000/carDepot/carDepotByMatricule/"+matricule;

    return this.httpClient.get<CarDepot>(url);
  }

}
