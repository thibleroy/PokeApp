import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { Pokedex } from '../models/pokedex';
import {Specs} from '../interfaces/specs';
import {Species} from '../interfaces/species';
import {Ability} from '../interfaces/ability';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loading: boolean;
  began: boolean;
  pokedex: Pokedex;
  pokemon: Pokemon;
  oPoks: Observable<Pokedex>;
  oPokSpec: Observable<Specs>;
  oPokSpecies: Observable<Species>;
  oPokAbilities: Observable<Ability[]>;
  constructor() {
    this.pokedex = new Pokedex();
    this.pokemon = new Pokemon();
    this.pokemon.abilities = [];
    this.oPoks = new Observable<Pokedex>();
    this.oPokSpec = new Observable<Specs>();
    this.oPokSpecies = new Observable<Species>();
    this.oPokAbilities = new Observable<Ability[]>();
    this.loading = true;
    this.began = false;
  }
}
