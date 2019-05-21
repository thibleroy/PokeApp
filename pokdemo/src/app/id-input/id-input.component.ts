import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon'
import { HttpServiceService } from '../http-service.service'
import { DataService } from '../data.service'
@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})


export class IdInputComponent implements OnInit {
  filter: String
  selected: Boolean = false;

  constructor(private httpService: HttpServiceService, private dataService: DataService) {

  }

  showPok() {
    this.selected = true;
    this.dataService.pokemons.forEach((p: Pokemon) => {
      if (p.name == this.filter) {
        this.httpService.getPok(p.id)
        this.httpService.getPokSpec(p.id)
      }
    })

  }
  ngOnInit() {
    this.httpService.getPoks()

    const observable = this.dataService.getPokemons()
    observable.subscribe((poksData: Pokemon[]) => {
      this.dataService.pokemons = poksData;
    })
  }


}
