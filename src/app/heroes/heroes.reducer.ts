import { HeroesActionsUnion } from './heroes.actions';
import { HeroesActionTypes } from '../shared/enum/heroes.actions.enum';
import { HeroeInterface, Heroe } from './heroes';

export function HeroesReducer(state: Array<Heroe> = [], action: HeroesActionsUnion): Array<HeroeInterface> {
  switch (action.type) {
    case HeroesActionTypes.Add: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

export const initialHeroState: Heroe = {
  _height: 0,
  _name: '',
  _nickname: '',
  _picture: ''
};

export function HeroeReducer(state: Heroe, action: HeroesActionsUnion): HeroeInterface {
  switch (action.type) {
    case HeroesActionTypes.AddCurrentHero: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
