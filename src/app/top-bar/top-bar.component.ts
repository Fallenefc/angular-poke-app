import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
    this.pokemon = {
      id: 1,
      name: "Pikachu"
    }
  }

  findPoke(): void {
    console.log(this.pokemon)
  }

}
