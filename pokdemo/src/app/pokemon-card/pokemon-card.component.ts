import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() done: boolean

  constructor(private dataService: DataService) {}

  ngOnInit() {}

}
