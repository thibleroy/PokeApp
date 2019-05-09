import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
Pokemons:{}
  constructor(private http:HttpClient) {
    this.Pokemons=this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
  }

   getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
  }
  getPokemon(id:String){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+id)
  }
}
