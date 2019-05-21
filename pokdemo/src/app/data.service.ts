import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import {Infos} from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokemons: Pokemon[]
  pokemon: Pokemon

  constructor() { 
    this.pokemons=[]
    this.pokemon=new Pokemon()
  }

  getPokemon(): Observable<Pokemon> {
    const obs = new Observable<Pokemon>(observer => {
      setTimeout(() => {
        observer.next(this.pokemon)
      }, 500)
    })
    return obs;
  }
  getPokemons(): Observable<Pokemon[]> {
    const obs = new Observable<Pokemon[]>(observer => {
      setTimeout(() => {
        observer.next(this.pokemons)
      }, 500)
    })
    return obs;
  }
  getPokemonSpec():Observable<Infos>{
    const obs = new Observable<Infos>(observer => {
      setTimeout(() => {
        observer.next(this.pokemon.infos)
      }, 500)
    })
    return obs;
  }
}
