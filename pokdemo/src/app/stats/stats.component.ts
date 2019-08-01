import { Component, OnInit } from '@angular/core';
import {DataService} from '../../lib/services/data.service';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public radarChartData: ChartDataSets[];
  public radarChartOptions: RadialChartOptions = {responsive: true};
  public radarChartLabels: Label[] = [];
  public radarChartType: ChartType = 'radar';

  constructor(private dataService: DataService ) {}

  ngOnInit() {
    const stats: number[] = [];
    const labels: string[] = [];
    this.dataService.pokemon.specs.stats.forEach((stat) => {
      stats.push(stat.base_stat);
      labels.push(stat.stat.name);
    });
    this.radarChartData = [
      {
        data: stats,
        label: 'stats'
      }
    ];
    this.radarChartLabels = labels;
  }
}
