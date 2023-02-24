import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimService } from 'src/app/services/tim/tim.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  public imeTIma: string = ""
  public logoTima: string= " "
  public imeTrenera: string= " "


  constructor(private timService: TimService, private router: Router) { }

  ngOnInit(): void {

  }
  

  
  dodajTim() {
    this.timService.addTim(this.imeTIma, this.logoTima,this.imeTrenera).subscribe(resp => {
      alert("Team is added!")
      this.router.navigate(['getTimovi'])
    })
  }


}
