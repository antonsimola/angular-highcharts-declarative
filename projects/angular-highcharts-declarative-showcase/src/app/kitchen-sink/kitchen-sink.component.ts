import { Component, DoCheck } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AxisTypeValue, OptionsZoomTypeValue } from 'highcharts';
import { HC_CHART_TYPES } from '../../../../angular-highcharts-declarative/src/lib/highchart-enums';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html'
})
export class KitchenSinkComponent implements DoCheck {
  // tslint:disable-next-line:variable-name
  _dataPointsCount = 100;
  set dataPointsCount(c: number) {
    this._dataPointsCount = c;
    this.max = c + 10;
    this.data = this.getData(c);
  }

  get dataPointsCount() {
    return this._dataPointsCount;
  }

  title = 'Angular Declarative + Reactive Showcase';
  data = this.getData(this._dataPointsCount);
  secondData = this.data.map(x => x - 2);
  asyncTrigger = new BehaviorSubject(1);
  asyncData = this.asyncTrigger.asObservable().pipe(
    switchMap(() => timer(2000)),
    map(() => this.getData(5))
  );
  zoomType: OptionsZoomTypeValue = 'xy';
  xAxisType: AxisTypeValue = null;

  valueToAdd = 1;
  positionToAdd = this.data.length;
  series1name = 'Series 1';
  seriesType = 'line';
  types = HC_CHART_TYPES;
  max = 10;
  visible = true;
  dSeries = [3, 4, 5];
  dXAxes = [1];
  legendEnabled = true;
  tooltipEnabled = true;
  valueSuffix = 'm3';

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  asyncTest() {
    this.asyncTrigger.next(1);
  }

  onAdd() {
    if (this.positionToAdd > this.data.length) {
      this.positionToAdd = this.data.length;
    }
    const copy = this.data.slice();
    copy[this.positionToAdd] = this.valueToAdd;
    this.data = copy;
    this.positionToAdd = this.data.length;
  }

  getData(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 40));
  }

  addSeries() {
    this.dSeries = this.dSeries.concat(this.dSeries.length + 3);
  }

  removeSeries() {
    this.dSeries = this.dSeries.slice(0, -1);
  }

  addXAxis() {
    this.dXAxes = this.dXAxes.concat(this.dXAxes.length + 1);
  }

  removeXAxis() {
    this.dXAxes = this.dXAxes.slice(0, -1);
  }
}
