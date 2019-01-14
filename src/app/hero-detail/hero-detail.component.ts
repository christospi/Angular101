import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroServiceService } from '../services/hero-service.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;
    @Output() childChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() childSaved: EventEmitter<any> = new EventEmitter<any>();

    isDirty = false;

    constructor(private heroservice: HeroServiceService) { }

    ngOnInit() { }

    doSave() {
        this.heroservice.saveHero(this.hero)
            .subscribe(res => {
                if (res) { this.childSaved.emit(); }
            });
    }

    dataChanged() {
        this.isDirty = true;
        this.childChanged.emit(true);
    }

}
