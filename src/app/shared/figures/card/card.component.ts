import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
// HC_exporting(Highcharts);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Highcharts=Highcharts
  chartOptions={}

  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
        type: 'spline'
    },
    title: {
    },
    // subtitle: {
    xAxis: {
      labels:{
        enabled:false
      }
    },
    yAxis: {
      labels:{
        enabled:false
      }

    },
    credits:{
      enabled:false
  },
  exporting:{
    enabled:false
},
legend:{
  enabled:false
},

    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]

    }, {
        name: 'Bergen',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 1.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
                description: 'Snowy symbol, this is the coldest point in the chart.'
            }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
    }]
    }
    // resizing figure
    setTimeout(() => {
      window.dispatchEvent(
        new Event("resize")
      )
    }, 300);

  }

}
