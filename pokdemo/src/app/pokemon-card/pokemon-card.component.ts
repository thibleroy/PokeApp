import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() id: Number
  done: Boolean

  constructor(private dataService: DataService, private httpService: HttpServiceService) {
    this.done = false;
  }

  ngOnInit() {

    this.httpService.getPok(this.id).then(() => this.dataService.getPokemon())
    this.httpService.getDesc(this.id).then(() => {
      this.dataService.getPokemon()
      this.done = true;
    }
    )
    console.log('pok',this.dataService.pokemon)
  }

}
