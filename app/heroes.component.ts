import { Component } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

import {Router} from '@angular/router';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router, private heroService: HeroService){}

    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero: Hero){
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}