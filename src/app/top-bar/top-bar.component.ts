import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
   this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
       this.router.navigated = false;
       window.scrollTo(0, 0);
    }
});
  }

  ngOnInit(): void {
    this.pokemon = {
      name: ""
    }
  }

  btnClick(): void {
    this.router.navigate([`/pokemon/${this.pokemon.name}`]);
  }

}
