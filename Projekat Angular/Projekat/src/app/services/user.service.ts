import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnik } from '../model/korisnik';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BACKEND_BASE="http://localhost:8080/Volleyball/api/"

  constructor(private httpClient: HttpClient) { }


  login(email: string, sifra: string): Observable<any> {
    let params = new HttpParams()
      .set("email", email)
      .set("sifra", sifra);

    return this.httpClient.post<Korisnik>(this.BACKEND_BASE + "login", params, {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    }
    )
  }

  register(userForm: any) {
    let params = new HttpParams()
      .set('imeKorisnika', userForm.value.imeKorisnika)
      .set('email', userForm.value.email)
      .set('sifra', userForm.value.sifra)
     

    console.log(params);
    return this.httpClient.post(this.BACKEND_BASE + 'register', params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  } 
  
}
