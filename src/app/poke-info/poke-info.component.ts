import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private pokeService: PokeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('name').toLowerCase();;
    console.log(id)
    this.getPokemonInAPI(id);
  }

  ngOnChange(): void {
    const id: string = this.route.snapshot.paramMap.get('name').toLowerCase();
    console.log(id)
    this.getPokemonInAPI(id);
    console.log('doggo')
  }

  getPokemonInAPI (poke) {
    this.pokeService.getPokes(poke).subscribe((poke) => this.pokes = poke);

    // element.style.backgroundColor = color;
    // console.log(color);
  }

}

