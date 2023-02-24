import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from 'src/app/model/igrac';
import { Tim } from 'src/app/model/tim';
import { IgraciService } from 'src/app/services/igraci.service';
import { TimService } from 'src/app/services/tim/tim.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

export class TeamListComponent implements OnInit {
  @Input() public izabraniTim!: Tim;

  public timovi!: Tim[]; 
  public igraci!: Igrac[];
  public selectedTim: Tim = new Tim(); 
  public players$!: Observable<Igrac[]>;


  constructor(private timService: TimService, private igracService: IgraciService) { }

  ngOnInit(): void {
    
    this.timService.getTim().subscribe((resp: any) => {
      this.timovi=resp
    });   
   
  }

  timSelected(value: any) {
    console.log("Value:" + value)
    console.log("Tim je selektovan")
    this.igracService.getIgraci(value).subscribe((resp: any) => {
      this.igraci = resp;
      console.log('Dobavljeni filtrirani igraci');
    });
  } 

  

}
