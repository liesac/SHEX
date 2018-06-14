import { Action } from '@ngrx/store';
import { HeroesActionTypes } from '../shared/enum/heroes.actions.enum';
import { Heroe } from './heroes';

export class Add implements Action {
    readonly type = HeroesActionTypes.Add;

    constructor(public payload: Heroe) { }
}

export class AddCurrentHero implements Action {
    readonly type = HeroesActionTypes.AddCurrentHero;

    constructor(public payload: Heroe) { }
}

export type HeroesActionsUnion = Add  | AddCurrentHero;