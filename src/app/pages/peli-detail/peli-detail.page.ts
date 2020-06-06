import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peli-detail',
  templateUrl: './peli-detail.page.html',
  styleUrls: ['./peli-detail.page.scss'],
})
export class PeliDetailPage implements OnInit {

  content : object = null;

  constructor(private peliSvc:PeliService, private activateRo:ActivatedRoute) { }

  ngOnInit() {
    let id = this.activateRo.snapshot.paramMap.get('id');
    this.peliSvc.getDetails(id).subscribe(result=> this.content = result);
    }

}
