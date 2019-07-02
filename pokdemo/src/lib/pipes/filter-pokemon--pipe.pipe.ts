import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {
  constructor(){}

  transform(value: any[], property?: string, childrenproperty?: string, searchString?: string): any {
      if (!value || !searchString) return [];
      else {
        return value.filter((e) => {
          return e[property][childrenproperty].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
      }
  }
}
