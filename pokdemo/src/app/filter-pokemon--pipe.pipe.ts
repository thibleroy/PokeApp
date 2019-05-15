import { Pipe, PipeTransform } from '@angular/core';
import {HttpServiceService} from './http-service.service'
@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {
  constructor(private http:HttpServiceService){}

  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return this.http.Pokemons.filter((e)=>{
        return e['name'].toLowerCase().indexOf('') !== -1;
      })
    }
  }

}
