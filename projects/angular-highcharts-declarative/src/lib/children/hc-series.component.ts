import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MapDataObject, Series, SeriesOptions } from 'highcharts';
import { HcChartService } from '../hc-chart.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { changesToFlat } from '../helpers';

@Component({
  selector: 'hc-series',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcSeriesComponent implements OnInit, OnDestroy, OnChanges, SeriesOptions {
  @Input()
  id?: string;
  @Input()
  index?: number;
  @Input()
  legendIndex?: number;
  @Input()
  mapData?: MapDataObject | Array<MapDataObject>;
  @Input()
  stack?: object | string;
  @Input()
  xAxis?: number | string;
  @Input()
  yAxis?: number | string;
  @Input()
  zIndex?: number;
  @Input()
  name = 'Series';
  @Input()
  type: string = null;

  @Input()
  data?: any = null;

  @Input()
  dataStream: Observable<any> = null;
  /**
   * Whether to also remove one point from end while pushing
   */
  @Input()
  dataStreamShift = false;

  @Input()
  extra: any = null;

  private initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));
  private dataSub: Subscription;

  constructor(private chartService: HcChartService) {}

  ngOnInit() {
    this.initialized$.subscribe(() => {
      if (this.dataStream) {
        this.dataSub = this.dataStream.subscribe(v => {
          this.addPoint(v, this.dataStreamShift);
        });
      }
    });
  }

  init(index: number) {
    if (this.initializedSub.getValue()) {
      return;
    }
    this.index = this.index || index;

    this.chartService.addSeries(this.getState());
    this.initializedSub.next(true);
    this.initializedSub.complete();
  }

  private getState() {
    let state = { ...this };
    delete state.chartService;
    delete state.initialized$;
    delete state.initializedSub;
    delete state.dataStream;
    delete state.dataStreamShift;
    delete state.dataSub;
    state = { ...state, ...state.extra };
    for (const [key, value] of Object.entries(state)) {
      if (value === null) {
        delete state[key];
      }
    }
    return state;
  }

  addPoint(value: any, shift = this.dataStreamShift) {
    this.chartService.addPoint(this.index, value, shift);
  }

  update(props: Partial<SeriesOptions>) {
    this.chartService.updateSeries(this.index, props);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.initializedSub.getValue()) {
      return;
    }
    if (changes.data && !changes.data.isFirstChange()) {
      this.chartService.updateSeriesData(this.index, changes.data.currentValue);
    }
    delete changes.data;
    this.update(changesToFlat(changes));
  }

  ngOnDestroy() {
    if (this.dataSub) {
      this.dataSub.unsubscribe();
    }
    this.chartService.removeSeries(this.index);
  }
}
