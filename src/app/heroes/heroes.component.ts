import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroServiceService } from '../services/hero-service.service';

@Component({
    selector: 'app-heroes', // component name
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    constructor(public heroService: HeroServiceService) { }

    // hero: Hero = new Hero();
    // heroes = HEROES;
    heroname = 'Deadpool';
    newhero = `Not${this.heroname}`;
    heroes: Hero[];
    selectedHero: Hero;

    lang: string;

    ngOnInit() {
        // this.hero = `The new hero is: ${this.newhero}`;
        // let temp_var = 5 // let: is demanded to have local variable
        // this.heroname = 'Batman';
        // this.hero.id = 11
        // this.hero.name = 'Heroku'

        this.lang = this.heroService.getLaguage();
        this.getHeroes();
    }

    doIt() {
        // alert(`Watch out for ${this.heroname}!`);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        // this.heroes = this.heroService.simpleGetHeroes();
        this.heroService.getHeroes().subscribe(response => this.heroes = response);
    }
}
