import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon'

import {DataService} from '../data.service'
import { Infos } from '../interfaces';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemon:Pokemon;
  pokemons:Pokemon[]

loading:Boolean=true;
  constructor(private dataService:DataService) {
   }

  ngOnInit() {   
    const observable = this.dataService.getPokemon();
    observable.subscribe((pokData:Pokemon) => {
        this.pokemon = pokData;
        this.loading=false
        console.log('poke',pokData)
    });

    const observableinfos=this.dataService.getPokemonSpec();
    observableinfos.subscribe((pokData:Infos)=>{
      this.pokemon.infos=pokData
      pokData.flavor_text_entries.forEach(entry=>{
        if (entry.language.name=='en') this.pokemon.description=entry.flavor_text
      })
      
    })
  }

}
