import { Component, OnInit } from '@angular/core';
import {DataService}from '../data.service'
@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private dataService:DataService ) {}

  ngOnInit() {
  }

}
