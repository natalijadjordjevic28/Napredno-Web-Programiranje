import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utakmica } from '../model/utakmica';

@Injectable({
  providedIn: 'root'
})
export class UtakmicaService {
  private BACKEND_BASE="http://localhost:8080/Volleyball/api/"

  constructor(private httpClient: HttpClient) { }


  getUtakmice(): Observable<Utakmica[]> {
    return this.httpClient.get<Utakmica[]>(this.BACKEND_BASE + "getUtakmice");
  }

  
 
  
  
   
     }
  

