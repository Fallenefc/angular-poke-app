import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pokemon = {
      name: ""
    }
  }

  findPoke(): void {
    console.log(this.pokemon)
  }

  btnClick(): void {
    this.router.navigateByUrl(`/pokemon/${this.pokemon.name}`);
  }

}
