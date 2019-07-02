import { Component, OnInit } from '@angular/core';
import {DataService} from '../../lib/services/data.service'
@Component({
  selector: 'abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
