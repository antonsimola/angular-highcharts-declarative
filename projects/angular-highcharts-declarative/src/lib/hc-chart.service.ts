import { ElementRef, Injectable, NgZone } from '@angular/core';
import { Chart, Options, SeriesOptions, XAxisOptions, YAxisOptions } from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable() // provide per chart component
export class HcChartService {
  private chartSubject = new BehaviorSubject<Chart>(null);
  chart$ = this.chartSubject.asObservable().pipe(first(c => c != null));

  constructor(private zone: NgZone) {}

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
        chart.update(options);
      });
    });
  }

  updateSeriesData(index: number, data: any[]) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        c.series[index].setData(data as any);
      });
    });
  }

  updateSeries(index: number, options: Partial<SeriesOptions>) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        c.series[index].update(options as any);
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

  addSeries(param: SeriesOptions) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        c.addSeries(param as any);
      });
    });
  }

  removeSeries(index: number) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.series[index]) {
          c.series[index].remove();
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
          c.xAxis[index].update(xAxisOptions);
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
          c.yAxis[index].update(yAxisOptions);
        }
      });
    });
  }

  removeXAxis(index: number) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.xAxis[index]) {
          c.xAxis[index].remove();
        }
      });
    });
  }

  removeYAxis(index: number) {
    this.chart$.subscribe(c => {
      this.zone.runOutsideAngular(() => {
        if (c.yAxis[index]) {
          c.yAxis[index].remove();
        }
      });
    });
  }
}
