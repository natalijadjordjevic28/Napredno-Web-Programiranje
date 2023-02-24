import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vesti } from '../model/vesti';

@Injectable({
  providedIn: 'root'
})
export class VestiService {

  private BACKEND_BASE="http://localhost:8080/Volleyball/api/"

  constructor(private httpClient: HttpClient) { }

  getVesti(): Observable<Vesti[]> {
    return this.httpClient.get<Vesti[]>(this.BACKEND_BASE + "getVesti");
  }

  addVesti(opis: string, slikaVest:string, email:string) {
    let parametri = new HttpParams()
      .set("email", email)
      .set("slikaVest", slikaVest )
      .set("opis", opis)
    return this.httpClient.post(this.BACKEND_BASE + "addVesti", parametri)
  }
  deleteVesti(idVesti:number): Observable<any> {
    let params = new HttpParams().set("idVesti", idVesti)
    return this.httpClient.post(this.BACKEND_BASE + "deleteVesti", params);
  }
}
