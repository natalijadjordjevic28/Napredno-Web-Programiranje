import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdm implements CanActivate {

  public idUloga!: number
  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log(localStorage.getItem("idUloga"))
      var x = localStorage.getItem("idUloga");
      if (x != null){
          this.idUloga = +x; //konvertuje string u broj, posto se iz localStoragea sve cita kao string, a nama treba idUloge
          if (localStorage.getItem("token") && this.idUloga == 2){
              console.log("proverili smo token i idUloge, poklapa se sa korisnikom")
              return true;
          }
      }   
      console.log("prosli smo proveru za administratora, nije ulogovan admin vec korisnik"); 
      alert("You are not logged in as admin!")
      this.router.navigate(["/getUtakmice"])
      return false;
  }
  
}