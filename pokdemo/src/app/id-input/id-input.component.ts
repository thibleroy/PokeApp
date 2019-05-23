import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service'
import { DataService } from '../data.service'
@Component({
  selector: 'app-id-input',
  templateUrl: './id-input.component.html',
  styleUrls: ['./id-input.component.css']
})


export class IdInputComponent implements OnInit {
  filter: String
  idSelected: Number
  done:Boolean;
  constructor(private httpService: HttpServiceService, private dataService: DataService) {
this.done=false;
  }

  showPok() {
    this.dataService.pokemons.forEach((entry) => {
      if (entry.name == this.filter) {
        this.idSelected=entry.id
        this.done=true;
      }
    })

    if (this.done){
      this.httpService.getPok(this.idSelected).then(() => this.dataService.getPokemon())
      this.httpService.getDesc(this.idSelected).then(() => {
        this.dataService.getPokemon()
      }
      )
    }
      
    
    

  }
  ngOnInit() {
    this.httpService.getPoks().then(() => {
      console.log('resprom', this.dataService.pokemons)
      this.dataService.getPokemons()
    })

  }


}
