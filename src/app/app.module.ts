import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { StoreModule } from '@ngrx/store';
import AppErrorHandler from './shared/errorhandler';
import { DataService } from './shared/services/data.service';
import { HeroesService } from './shared/services/heroes.service';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { HeroesReducer, HeroeReducer } from './heroes/heroes.reducer';
 
@NgModule({
    imports: [
        BrowserModule
        , routing
        , FormsModule
        , HttpClientModule
        , StoreModule.forRoot({
            heroes: HeroesReducer,
            heroe: HeroeReducer
        })
    ],
    declarations: [
        AppComponent,
        HeroListComponent,
        HeroComponent
    ],
    providers: [
        {
            provide: ErrorHandler, useClass: AppErrorHandler
        },
        DataService,
        HeroesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
