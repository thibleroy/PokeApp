import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon'
import {DataService} from './data.service'
import {Values,Infos} from './interfaces'

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  constructor(private http: HttpClient,private dataService:DataService) {
  }

  getPoks() {
    this.http.get<Values>('https://pokeapi.co/api/v2/pokedex/1').subscribe(
      res => {
        let entries = res.pokemon_entries
        for (let entry of entries) {
          this.dataService.pokemons.push({
            id: ''+entry.entry_number,
            name: entry.pokemon_species.name
          })
        }
      }
    );
  }
  getPok(id: String) {
    
      console.log('getpok',id)
      this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + id).subscribe(
        res => {
         this.dataService.pokemon=res
         console.log('pok',res)
        }
      )
    
  }
  getPokSpec(id:String){

    this.http.get<Infos>('https://pokeapi.co/api/v2/pokemon-species/' + id).subscribe(
      res => { this.dataService.pokemon.infos=res}
    )
  }
}
