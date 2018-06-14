export class Heroe {
    _height: number;
    _name: string;
    _nickname: string;
    _picture: string;
}

export interface HeroeInterface {
    _height: number;
    _name: string;
    _nickname: string;
    _picture: string;
}

export interface HeroesStateInterface {
    readonly heroes: Array<Heroe>;
    readonly heroe: Heroe;
}