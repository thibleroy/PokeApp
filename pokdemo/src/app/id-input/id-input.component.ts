import { Component, OnInit, NgModule } from '@angular/core';
import { Pokemon } from '../pokemon'
import { HttpServiceService, Values } from '../http-service.service'
@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})


export class IdInputComponent implements OnInit {
  choice: String;
  filter: String;
  ListPokemons: Pokemon[];

  constructor(private httpService: HttpServiceService) {
   this.ListPokemons= this.httpService.getPokemons();
    this.ListPokemons = this.httpService.Pokemons;
  }

  showPok() {
    console.log('heyy', this.ListPokemons)

  }
  ngOnInit() {
    this.ListPokemons=this.httpService.getPokemons();
    this.ListPokemons = this.httpService.Pokemons;
    
  }


}
