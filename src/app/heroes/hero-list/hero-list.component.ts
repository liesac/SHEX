import { Component } from "@angular/core";
import { HeroesService } from "../../shared/services/heroes.service";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Heroe, HeroesStateInterface } from "../heroes";
import { Add, AddCurrentHero } from "../heroes.actions";

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'
})

export class HeroListComponent {

    private errorMessage: string;
    private heroesList: Observable<Array<Heroe>>;

    constructor(private heroesService: HeroesService,
        private store: Store<HeroesStateInterface>,
        private router: Router) {
        this.heroesList = store.select('heroes');
        this.heroesList.subscribe((heroesList: Array<Heroe>) => {
            if (heroesList.length === 0) {
                this.getHeroesList();
            }
        });
    }

    private getHeroesList() {
        this.heroesService.getHeroes().subscribe(
            (heroesList => {
                heroesList.map((element) => {
                    this.store.dispatch(new Add(element));
                });
            }),
            error => {
                this.errorMessage = <any>error;
            });
    }

    private openHeroData(hero: Heroe) {
        this.store.dispatch(new AddCurrentHero(hero));
        this.router.navigateByUrl('heroe');
    }

    private returnNumberTh(number: number) {
        let numberText = '';
        switch (number) {
            case 1:
                numberText = 'st';
                break;
            case 2:
                numberText = 'nd';
                break;
            case 3:
                numberText = 'rd';
                break;
            default:
                numberText = 'th';
                break;
        }

        return number + numberText;
    }

    private footsToMeters(foots: number): number {
        console.log('saddads', foots, foots * 0.3048);
        return Math.round((foots * 0.3048) * 100)/100;
    }
}