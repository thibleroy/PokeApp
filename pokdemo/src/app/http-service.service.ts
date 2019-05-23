import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon'
import { DataService } from './data.service'
import { Value, Description, Info } from './interfaces'

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  constructor(private http: HttpClient, private dataService: DataService) {
  }

  getPoks(): Promise<Value[]> {
    let promise = new Promise<Value[]>((resolve, reject) => {
      this.http.get<Value[]>('https://pokeapi.co/api/v2/pokedex/1').subscribe(
        (res: any) => {
          let entries: Value[] = res.pokemon_entries;
          entries.forEach(entry => {
            let temp = new Pokemon();
            temp.id = entry.entry_number;
            temp.name = entry.pokemon_species.name;
            this.dataService.pokemons.push(temp);
          })
          resolve()
        });
    })
    return promise;

  }
  getPok(id: Number): Promise<Info> {
    let promise = new Promise<Info>((resolve, reject) => {
      this.http.get<Info>('https://pokeapi.co/api/v2/pokemon/' + id).subscribe(
        (res:Info) => {
          this.dataService.pokemon.sprites=res.sprites;
          this.dataService.pokemon.abilities = res.abilities;
          this.dataService.pokemon.experience=res.base_experience;
          this.dataService.pokemon.stats=res.stats;
          this.dataService.pokemon.types=res.types;
          this.dataService.pokemon.weight=res.weight;
          this.dataService.pokemon.height=res.height;
          this.dataService.pokemon.species=res.species;
          this.dataService.pokemon.id=res.id;
          this.dataService.pokemon.name=res.name;
          resolve()
        });
    })
    return promise
  }


  getDesc(id: Number): Promise<Description> {

    let promise = new Promise<Description>((resolve, reject) => {
      this.http.get('https://pokeapi.co/api/v2/pokemon-species/' + id).subscribe(
        (res: Description) => {
          console.log('edesc',res)
          res.flavor_text_entries.forEach(desc => {
            if (desc.language.name = 'en') this.dataService.pokemon.description = desc.flavor_text
          })
          this.dataService.pokemon.color=res.color;
          this.dataService.pokemon.happiness=res.base_happiness;
          this.dataService.pokemon.capture_rate=res.capture_rate;
          resolve()
        }
      )
    })
    return promise;
  }
}
