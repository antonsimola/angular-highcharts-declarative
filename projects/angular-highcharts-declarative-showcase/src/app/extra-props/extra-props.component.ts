import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-extra-props',
  templateUrl: './extra-props.component.html',
  styles: [
      `
          :host ::ng-deep hc-chart .highcharts-series-1 {
              stroke-dasharray: 1, 3;
          }

          :host ::ng-deep hc-chart .highcharts-series-0 {
              stroke-dasharray: 10, 12;
          }
    `
  ]
})
export class ExtraPropsComponent implements OnInit {
  depData = [{from: 'x', to: 'y', weight: 5}, {from: 'y', to: 'z', weight: 10}, {from: 'z', to: 'x', weight: 15}];
  extraWheel = {curveFactor: 0.6};

  r = 10;
  size = 400;
  private circleData: any[];

  constructor() {
  }

  ngOnInit() {
    this.generateData();
  }

  inputChange() {
    this.extraWheel = {...this.extraWheel};
  }

  generateData() {
    const data = [];
    let x = 0;
    let y = 0;
    const n = 1000;
    for (let i = 0; i < n; i++) {
      x = this.r * Math.cos(2 * Math.PI * i / n);
      y = this.r * Math.sin(2 * Math.PI * i / n);
      data.push([x, y]);
    }
    this.circleData =  data;
  }
}
