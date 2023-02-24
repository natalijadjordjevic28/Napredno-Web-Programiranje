import { Component, OnInit } from '@angular/core';
import { Utakmica } from 'src/app/model/utakmica';
import { UtakmicaService } from 'src/app/services/utakmica.service';

@Component({
  selector: 'app-utakmice',
  templateUrl: './utakmice.component.html',
  styleUrls: ['./utakmice.component.css']
})
export class UtakmiceComponent implements OnInit {
  public utakmice!: Utakmica[];
  

  
  
  constructor(private utakmicaService: UtakmicaService) { }

  ngOnInit(): void {
    this.utakmicaService.getUtakmice().subscribe((resp: any) => {
      this.utakmice=resp
    });  
      

      

   

  }

}
