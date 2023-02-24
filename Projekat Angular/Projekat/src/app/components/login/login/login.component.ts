import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  public email: string = '';
  public sifra: string = '';

  ngOnInit(): void {
  }

  

  login() {
    this.userService.login(this.email, this.sifra).subscribe((resp:any) => {
      if (resp.idKorisnika=0) {
        console.log(resp)
        alert("Login failed! Try again!"),
        this.router.navigate(['/login'])
      } else {
        console.log(resp)
        localStorage.setItem("token", resp.token),
        localStorage.setItem("idKorisnika", resp.idKorisnika),
        localStorage.setItem("idUloga", resp.idUloga),
        this.router.navigate(['getUtakmice'])
      }
    })
  }
  }


