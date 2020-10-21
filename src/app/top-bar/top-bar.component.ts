import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PokeInfoComponent } from '../poke-info/poke-info.component';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  pokemon: Pokemon;

  // Copied that code from someone on GitHub lolz, apparently it overrides the router non-refreshing for the same uri
  constructor(private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
   this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
       // trick the Router into believing it's last link wasn't previously loaded
       this.router.navigated = false;
       // if you need to scroll back to top, here is the right place
       window.scrollTo(0, 0);
    }
});
  }

  ngOnInit(): void {
    this.pokemon = {
      name: ""
    }
  }

  findPoke(): void {
    console.log(this.pokemon)
  }

  btnClick(): void {
    // this.router.navigateByUrl(`/pokemon/${this.pokemon.name}`);
    // this.router.navigate([`/pokemon/${this.pokemon.name}`]);
    this.router.navigateByUrl(`/pokemon/${this.pokemon.name}`, { skipLocationChange: true }).then(() => {
      this.router.navigate([PokeInfoComponent]);
  }); 
  }

}
