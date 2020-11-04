import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../services/poke.service';

export class PokeInfo {
  constructor(
    public id: number,
    public name: string,
    public type: string[],
    public stats: string[],
    public picture: string,
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
  pokeLoaded: boolean = false;

  pokeStats = {
    hp: '0%',
    attack: '0%',
    defense: '0%',
    spAtk: '0%',
    spDef: '0%',
    speed: '0%'
  }

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
  }

  getPokemonInAPI (poke: string) {
    this.pokeService.getPokes(poke).subscribe((poke) => {
      this.pokes = poke;
      this.pokeLoaded = true;
      this.pokeStats = {
        hp: `${this.pokes.stats[0].base_stat / 250 * 100}%`,
        attack: `${this.pokes.stats[1].base_stat / 250 * 100}%`,
        defense: `${this.pokes.stats[2].base_stat / 250 * 100}%`,
        spAtk: `${this.pokes.stats[3].base_stat / 250 * 100}%`,
        spDef: `${this.pokes.stats[4].base_stat / 250 * 100}%`,
        speed: `${this.pokes.stats[5].base_stat / 250 * 100}%`
      }
      console.log(this.pokeStats)
    });
  }

}

