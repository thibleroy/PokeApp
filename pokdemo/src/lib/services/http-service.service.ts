import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from '../models/pokedex';
import {Specs} from '../interfaces/specs';
import {Species} from '../interfaces/species';
import {Ability} from '../interfaces/ability';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  constructor(private http: HttpClient) {
  }

  getPokedex(): Observable<Pokedex> {
      return this.http.get<Pokedex>('https://pokeapi.co/api/v2/pokedex/1');
  }
  getPokemonSpecs(name: string): Observable<Specs> {
      return this.http.get<Specs>('https://pokeapi.co/api/v2/pokemon/' + name);
  }
  getPokemonSpecies(name: string): Observable<Species> {
      return this.http.get<Species>('https://pokeapi.co/api/v2/pokemon-species/' + name);
  }
  getPokemonAbility(url: string): Observable<Ability> {
      return this.http.get<Ability>(url);
  }

}
