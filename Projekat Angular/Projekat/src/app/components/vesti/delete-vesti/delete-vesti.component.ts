import { Component, OnInit } from '@angular/core';
import { VestiService } from 'src/app/services/vesti.service';

@Component({
  selector: 'app-delete-vesti',
  templateUrl: './delete-vesti.component.html',
  styleUrls: ['./delete-vesti.component.css']
})
export class DeleteVestiComponent implements OnInit {

  public idVesti:number=0;
 

  constructor(private vestiService: VestiService) { }

  ngOnInit(): void {
   
  }
  
  delVest() {
    console.log(this.idVesti)
    this.vestiService.deleteVesti(this.idVesti).subscribe(resp => {
      console.log(this.idVesti)
      if (resp==true) {
        console.log("Vest je izbrisana")
        alert("The message has been deleted   ")
        window.location.reload();
      }
    })
  }
  }


