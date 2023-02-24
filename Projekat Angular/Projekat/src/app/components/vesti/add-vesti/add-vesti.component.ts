import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VestiService } from 'src/app/services/vesti.service';


@Component({
  selector: 'app-add-vesti',
  templateUrl: './add-vesti.component.html',
  styleUrls: ['./add-vesti.component.css']
})
export class AddVestiComponent implements OnInit {
  public email: string=" "
  public slikaVest: string= " "
  public opis: string = ""
  constructor(private vestiService: VestiService, private router: Router) { 
  
   }

  ngOnInit(): void {
    
  

  }
  dodajVesti() {
    this.vestiService.addVesti(this.opis, this.slikaVest, this.email).subscribe(resp => {
      alert("News is added!")
      this.router.navigate(['getVesti'])
    })
  }

}
