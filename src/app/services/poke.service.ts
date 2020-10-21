import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeInfo } from '../poke-info/poke-info.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  todosUrl:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getPokes(poke):Observable<PokeInfo[]> {
    return this.http.get<PokeInfo[]>(`${this.todosUrl}${poke}`);
  }
}
