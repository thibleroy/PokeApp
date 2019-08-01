import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../lib/services/http-service.service';
import { DataService } from '../../lib/services/data.service';
import {Specs} from '../../lib/interfaces/specs';
import {Species} from '../../lib/interfaces/species';
import {Ability} from '../../lib/interfaces/ability';
@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})


export class IdInputComponent implements OnInit {
  filter: string;
  constructor(private httpService: HttpServiceService, private dataService: DataService) {
  }
  showPok() {
    this.dataService.loading = true;
    this.httpService.getPokemonSpecs(this.filter).subscribe((res: Specs) => {
      this.dataService.pokemon.specs = res;

      this.httpService.getPokemonSpecies(this.filter).subscribe((result: Species) => {
        this.dataService.pokemon.species = result;
        result.flavor_text_entries.forEach(r => {
          if (r.language.name === 'en') { this.dataService.pokemon.species.flavor_text_entries[0] = r; }
        });
        this.dataService.began = true;
        this.dataService.loading = false;
      });
      res.abilities.forEach((ab) => {
        this.httpService.getPokemonAbility(ab.ability.url).subscribe((ability: Ability) => {
              this.dataService.pokemon.abilities.push(ability);
        });
      });
    });
  }
  ngOnInit() {}

}
