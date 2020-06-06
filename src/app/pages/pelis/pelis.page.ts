import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Ipelis } from 'src/app/model/Ipelis.interface';
import { PeliService } from 'src/app/services/peli.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  results: Observable<Ipelis>
  term : string =''
  type : string = '';
  constructor(private peliSvc:PeliService) { }

  ngOnInit() {
  }

  searchChange():void{
    this.results = this.peliSvc.searchPelis(this.term,this.type);
  }
  
}
