import { Injectable } from '@angular/core';
import { HEROES } from '../utils/mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../classes/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageServiceService } from './message-service.service';

@Injectable({
    providedIn: 'root'
})
export class HeroServiceService {

    private APIurl = 'https://mad-dev.upcom.eu/mad-api/v1/hero';
    private lang = 'GR';

    constructor(
        private messageService: MessageServiceService,
        private http: HttpClient
    ) { }

    getLaguage() {
        return this.lang;
    }

    simpleGetHeroes() {
        this.messageService.add('HeroService: just fetched MockHeroes');
        return HEROES;
    }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: just fetched RealHeroes');
        // return of(HEROES);

        return this.http.get<Hero[]>(this.APIurl)
            .pipe(
                catchError(this.handleError('getHeroes()', []))
            );
    }

    saveHero(hero: Hero) {
        this.messageService.add(`HeroService: Saving Hero: ${hero.name}`);
        return this.http.post<Hero>(this.APIurl, hero)
        .pipe(
            catchError(this.handleError('saveHero()', null))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
