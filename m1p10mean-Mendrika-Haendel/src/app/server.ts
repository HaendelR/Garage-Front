import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root",
})
export class Server {
  getUrl(): String {
    const url = environment.API_URL;
    return url;
  }
}
