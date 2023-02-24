import { Component, Input, OnInit } from '@angular/core';
import { Igrac } from 'src/app/model/igrac';
import { IgraciService } from 'src/app/services/igraci.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
   public igraci!: Igrac[];
   @Input() public igrac!: Igrac;
  constructor(private playerService: IgraciService) { }

  ngOnInit(): void {
    this.playerService.getIgrac().subscribe((resp:any) => {
      this.igraci=resp
    })

  }

}
