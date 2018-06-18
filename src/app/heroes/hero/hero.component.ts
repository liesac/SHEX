import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { HeroesStateInterface, Heroe } from "../heroes";

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html'
})

export class HeroComponent {

    private currentHeroe: Heroe;

    constructor(private store: Store<HeroesStateInterface>,
        private router: Router) {
        store.select('heroe').subscribe((currentHero: Heroe) => {
            if (currentHero) {
                this.currentHeroe = currentHero;
            } else {
                this.router.navigateByUrl('heroes');
            }
        });
    }

    private onClickRegresar() { 
        this.router.navigateByUrl('heroes');
    }

}