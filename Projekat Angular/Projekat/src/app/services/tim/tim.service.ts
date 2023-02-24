import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from 'src/app/model/igrac';
import { Tim } from 'src/app/model/tim';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  private BACKEND_BASE = "http://localhost:8080/Volleyball/api/"

  constructor(private httpClient: HttpClient) { }

  getTim(): Observable<Tim[]> {
    return this.httpClient.get<Tim[]>(this.BACKEND_BASE + "getTimovi");
  }

  addTim(imeTIma: string, logoTima: string, imeTrenera: string):Observable<any>{
    let parametri = new HttpParams()
      .set("imeTIma", imeTIma)
      .set("logoTima", logoTima)
      .set("imeTrenera", imeTrenera)
    return this.httpClient.post(this.BACKEND_BASE + "addTim", parametri)
  }

  // getIgraci(idTima: number): Observable<Igrac[]> {
  //   console.log("service")
  //   let params = new HttpParams()
  //     .set("idTima", idTima)
  //     console.log(idTima)
  //   return this.httpClient.get<Igrac[]>(this.BACKEND_BASE + "igraciZaTim", { params });

  // }
}
