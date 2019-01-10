import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroServiceService {

    lang = 'GR'
    constructor() { }

    getLaguage(){
        return this.lang;
    }
}
