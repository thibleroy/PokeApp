import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokemons: Pokemon[];
  pokemon: Pokemon;
  subPoks: Subject<Pokemon[]>;
  subPok: Subject<Pokemon>;
  subDesc: Subject<string>;
  constructor() {
    this.pokemons = [];
    this.pokemon = new Pokemon();
    this.subPoks = new Subject<Pokemon[]>();
    this.subPok = new Subject<Pokemon>();
    this.subDesc = new Subject<string>();
    this.subPok.subscribe((pok: Pokemon) => {
      this.pokemon = pok;
    });
    this.subPoks.subscribe((poks: Pokemon[]) => {
      this.pokemons = poks;
    });
    this.subDesc.subscribe((desc: string) => {
      this.pokemon.description = desc;
    });
  }

  getPokemon() {
    this.subPok.next(this.pokemon);
  }

  getPokemonDesc() {
    this.subDesc.next(this.pokemon.description);
  }

  getPokemons() {
    this.subPoks.next(this.pokemons);
  }
}
