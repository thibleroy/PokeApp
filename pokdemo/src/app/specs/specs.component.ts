import { Component, OnInit } from '@angular/core';
import {DataService} from '../../lib/services/data.service'
@Component({
  selector: 'specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
