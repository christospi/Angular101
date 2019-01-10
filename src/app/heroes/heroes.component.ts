import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero'
import { HEROES } from '../utils/mock-heroes';
import { HeroServiceService } from '../services/hero-service.service';

@Component({
    selector: 'app-heroes', // component name
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor(private heroservice: HeroServiceService) { }

    // hero: Hero = new Hero();
    heroname = 'Deadpool';
    newhero = `Not${this.heroname}`;
    heroes = HEROES;
    selectedHero: Hero;

    lang: string;

    ngOnInit() {
        // this.hero = `The new hero is: ${this.newhero}`;
        // let temp_var = 5 // let: is demanded to have local variable
        // this.heroname = 'Batman';
        // this.hero.id = 11
        // this.hero.name = 'Heroku'

        this.lang = this.heroservice.lang;
    }

    doIt() {
        // alert(`Hey, this is ${this.hero.name}!`)
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
