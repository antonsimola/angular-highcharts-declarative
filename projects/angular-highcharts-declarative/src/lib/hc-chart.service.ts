import {ElementRef, Injectable, NgZone} from '@angular/core';
import {Chart, Options, SeriesOptions, XAxisOptions, YAxisOptions} from 'highcharts';
import {BehaviorSubject, Observable} from 'rxjs';
import {first} from 'rxjs/operators';

@Injectable() // provide per chart component
export class HcChartService {
  private chartSubject = new BehaviorSubject<Chart>(null);
  chart$: Observable<Chart> = this.chartSubject.asObservable().pipe(first(c => c != null));
  autoRedraw = true;

  constructor(private zone: NgZone) {
  }

  getChartInstance() {
    return this.chartSubject.getValue();
  }

  redraw() {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => c.redraw());
    });
  }

  wrapOutsideZone(cb: (chart: Chart) => void) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => cb(c));
    });
  }

  initChart(element: ElementRef, options: Options) {
    this.zone.runOutsideAngular(() => {
      const c = new Chart(element.nativeElement, options, chart => {
        this.zone.run(() => {
          this.chartSubject.next(chart);
        });
      });
    });
  }

  update(options: Partial<Options>) {
    this.chart$.subscribe(chart => {
      this.zone.runOutsideAngular(() => {
        chart.update(options, this.autoRedraw);
      });
    });
  }

  updateSeriesData(index: number, data: any[]) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        c.series[index].setData(data as any, this.autoRedraw);
      });
    });
  }

  updateSeries(index: number, options: Partial<SeriesOptions>) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        c.series[index].update(options as any, this.autoRedraw);
      });
    });
  }

  destroyChart() {
    const chart = this.chartSubject.getValue();
    if (chart) {
      chart.destroy();
      this.chartSubject.next(null);
      this.chartSubject.complete();
    }
  }

  addSeries(param: SeriesOptions, cb: (Series) => void = null) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        const series = c.addSeries(param as any, this.autoRedraw);
        if (cb) {
          cb(series);
        }
      });
    });
  }

  removeSeries(index: number) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.series[index]) {
          c.series[index].remove(this.autoRedraw);
        }
      });
    });
  }

  updateXAxis(index: number, xAxisOptions: Partial<XAxisOptions>) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (!c.xAxis[index]) {
          c.addAxis(xAxisOptions, true);
        } else {
          c.xAxis[index].update(xAxisOptions, this.autoRedraw);
        }
      });
    });
  }

  updateYAxis(index: number, yAxisOptions: Partial<YAxisOptions>) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (!c.yAxis[index]) {
          c.addAxis(yAxisOptions, false);
        } else {
          c.yAxis[index].update(yAxisOptions, this.autoRedraw);
        }
      });
    });
  }

  removeXAxis(index: number) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.xAxis[index]) {
          c.xAxis[index].remove(this.autoRedraw);
        }
      });
    });
  }

  removeYAxis(index: number) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.yAxis[index]) {
          c.yAxis[index].remove(this.autoRedraw);
        }
      });
    });
  }

  addPoint(index: number, v: any, shift = true) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.series[index]) {
          c.series[index].addPoint(v, this.autoRedraw, shift);
        }
      });
    });
  }
}
