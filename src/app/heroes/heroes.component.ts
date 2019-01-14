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
    childIsDirty = null;

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
        if (!this.childIsDirty) {
            this.selectedHero = hero;
        }
    }

    getHeroes(): void {
        // this.heroes = this.heroService.simpleGetHeroes();
        this.heroService.getHeroes().subscribe(response => this.heroes = response);
    }

    doNewHero(): void {
        this.selectedHero = { id: null, name: null };
    }

    childChanged(state: boolean) {
        this.childIsDirty = state;
    }

    childSaved() {
        // Refresh data when we save (POST) new hero on our DB
        this.ngOnInit();
    }
}
