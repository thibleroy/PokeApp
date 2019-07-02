import { Component, OnInit } from '@angular/core';
import { DataService } from '../../lib/services/data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pokemon',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit() {}
}
