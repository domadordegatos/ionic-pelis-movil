import { Ipelis } from './../model/Ipelis.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string ='';
  private apiKey : string = 'bcd732e9';
  constructor(private http:HttpClient) { }

  searchPelis(title:string, type:string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    
    return this.http.get<Ipelis>(this.url).pipe(map(results=> results['Search']));
  }

    getDetails(id:string){
      return this.http.get<Ipelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);

    }

}
