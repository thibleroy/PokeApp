import { Component, OnInit } from '@angular/core';
import {DataService} from '../../lib/services/data.service'
@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
