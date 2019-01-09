import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero'
import { HEROES } from '../utils/mock-heroes';

@Component({
    selector: 'app-heroes', // component name
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor() { }

    heroname = 'Deadpool';
    newhero = 'Spiderman';
    // hero: Hero = new Hero();
    heroes = HEROES;
    selectedHero: Hero;

    ngOnInit() {
        // this.hero = `The new hero is: ${this.newhero}`;
        // let temp_var = 5 // let: is demanded to have local variable
        // this.heroname = 'Batman';
        // this.hero.id = 11
        // this.hero.name = 'Heroku'
    }

    doIt() {
        // alert(`Hey, this is ${this.hero.name}!`)
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
