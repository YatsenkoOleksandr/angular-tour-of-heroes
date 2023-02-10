import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // styles does not affect other components
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  /**
   * Angular lifecycle hook - execute on init
  */
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // async approach via Observable - subscribe for data for being loaded and update property
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);

    /**
     * If you neglect to subscribe(), the service can't send the delete request to the server.
     * As a rule, an Observable does nothing until something subscribes.
     */
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
