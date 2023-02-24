import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from '../model/igrac';


@Injectable({
  providedIn: 'root'
})
export class IgraciService {
  private BACKEND_BASE = "http://localhost:8080/Volleyball/api/"

  constructor(private httpClient: HttpClient) { }

  getIgraci(idTima: number): Observable<Igrac[]> {
    return this.httpClient.get<Igrac[]>(this.BACKEND_BASE + 'igraciZaTim/' + idTima);
  }
  getIgrac(): Observable<Igrac[]> {
    return this.httpClient.get<Igrac[]>(this.BACKEND_BASE + "igraciTima");
  }

}
