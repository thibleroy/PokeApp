import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})


export class IdInputComponent implements OnInit {
  filter: string;
  idSelected: number;
  loaded: boolean;
  id:String;
  constructor(private httpService: HttpServiceService, private dataService: DataService) {
    this.loaded = false;
  }

  showPok() {
    this.loaded = false;
    this.dataService.pokemons.forEach((entry) => {
      if (entry.name === this.filter) {
        this.idSelected = entry.id;

      }
    });


    this.httpService.getPok(this.idSelected).then(() => {
      this.dataService.getPokemon();
      this.loaded = true;
    });

    this.httpService.getDesc(this.idSelected).then(() => {
      this.dataService.getPokemon();
    }
    );
  }
  ngOnInit() {}

}
