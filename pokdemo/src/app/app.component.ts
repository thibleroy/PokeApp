import { Component, OnInit} from '@angular/core';
import {DataService} from '../lib/services/data.service';
import {HttpServiceService} from '../lib/services/http-service.service';
import { Pokedex } from '../lib/models/pokedex';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.httpService.getPokedex().subscribe(
        (res: Pokedex) => {
          this.dataService.pokedex = res;
        }
    );
  }

  constructor(private dataService: DataService, private httpService: HttpServiceService ){
  }
  }

