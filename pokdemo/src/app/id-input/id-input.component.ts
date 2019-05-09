import { Component, OnInit, NgModule } from '@angular/core';
import {Pokemon} from '../pokemon'
import {HttpServiceService as http} from '../http-service.service'
@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css'],
  providers:[http]
})


export class IdInputComponent implements OnInit {
  choice:String='';
  filter:String='';
  pok:{};
ListPokemons:Array<Pokemon>=new Array<Pokemon>()
  constructor() {
    this.ListPokemons.push(new Pokemon('id1','poke1'))
    this.ListPokemons.push(new Pokemon('id2','poke2'))
    this.ListPokemons.push(new Pokemon('id3','poke3'))
    this.ListPokemons.push(new Pokemon('id4','poke4'))
   }

  ngOnInit() {
    this.pok=http
  }

  Filtrer(){
console.log(this.filter)
  }

}
