import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vesti } from 'src/app/model/vesti';
import { VestiService } from 'src/app/services/vesti.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public sveVesti!: Vesti[];
  @Input() public izabranaVest!: Vesti;
  public idVesti!: number
  public korisnikLog: boolean = false;
  public adminLog: boolean = true;

  constructor(private vestiService: VestiService) { }

  ngOnInit(): void {
    this.vestiService.getVesti().subscribe((resp: any) => {
      this.sveVesti = resp
    })

  }

  proveriUlogovanostAdmina(): boolean {
    const tmp = localStorage.getItem('idUloga')
    if (tmp != undefined && tmp == '2') {
      return true;
    }
    return false;
  }



  delVest() {
    console.log(this.idVesti)
    console.log("pozivam")
    this.vestiService.deleteVesti(this.idVesti).subscribe(resp => {
      console.log(this.idVesti)

      if (resp == true) {
        console.log("Vest je izbrisana")
        alert("The message has been deleted   ")
        window.location.reload();
      }
    })
  }









}
