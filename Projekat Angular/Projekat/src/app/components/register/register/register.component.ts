import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Korisnik } from 'src/app/model/korisnik';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
   
  ngOnInit(): void {
  }

  
  register(userForm: any) {
    console.log(userForm.value.username)
    console.log("stigli smo u register register component")
    this.userService.register(userForm).subscribe((resp: any) => {
      if (resp == true) {
        alert("You have successfully registered on the system!")
        this.router.navigate(['login'])
      } else {
        alert("There is already a user with this username! Try again")
      }
    })
  }

}

