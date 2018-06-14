import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    providers: [DataService]
})

export class HeroesService {

    private heroesList: string = '/heroes';

    constructor(private _dataService: DataService) { }

    public getHeroes() {
        return this._dataService.getAllData(this.heroesList);
    }

}