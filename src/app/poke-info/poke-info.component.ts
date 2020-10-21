import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

export class PokeInfo {
  constructor(
    public id: number,
    public name: string,
    public type: string[],
    public stats: string[],
    public picture: string
  ) {  }
}

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
@Injectable()
export class PokeInfoComponent implements OnInit {

  pokes: any;
  pokeId: number;

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.getPokemonInAPI('pikachu');
  }

  getPokemonInAPI (poke) {
    this.pokeService.getPokes(poke).subscribe((poke) => this.pokes = poke)
  }

}

