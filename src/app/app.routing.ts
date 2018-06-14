import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroComponent } from './heroes/hero/hero.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: 'heroe', component: HeroComponent
    },

    { path: '**', redirectTo: '/heroes' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);