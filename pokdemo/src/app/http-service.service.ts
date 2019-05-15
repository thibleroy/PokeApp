import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon'
export interface Values {

  pokemon_entries: [{
    entry_number: number,
    pokemon_species: {
      name: String,
      url: String
    }
  }]

}

@Injectable({
  providedIn: 'root'
})


export class HttpServiceService {
  Pokemons: Pokemon[];
  
  constructor(private http: HttpClient) {
    this.Pokemons = []
    this.getPok()
  }

  getPok() {
    this.http.get<Values>('https://pokeapi.co/api/v2/pokedex/1').subscribe(
      res => {
        let entries = res.pokemon_entries
        for (let entry of entries) {
          this.Pokemons.push({
            id: entry.entry_number,
            name: entry.pokemon_species.name
          })
        }

      }

    );
  }
  getPokemons() {
    return this.Pokemons
  }

  getPokemon(id: String) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id)
  }
}
