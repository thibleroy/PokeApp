import { Component,OnInit} from '@angular/core';
import {DataService}from './data.service'
import {HttpServiceService}from './http-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService:DataService,private httpService:HttpServiceService ){}
  ngOnInit(): void {{
    this.httpService.getPoks().then(() => {
      this.dataService.getPokemons()
    })

  }
  }

  title = 'pokdemo';

  
}
