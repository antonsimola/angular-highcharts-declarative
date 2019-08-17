import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MapDataObject, Series, SeriesOptions} from 'highcharts';
import {HcChartService} from '../hc-chart.service';
import {BehaviorSubject} from 'rxjs';
import {first} from 'rxjs/operators';

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
  data = null;

  @Input()
  extra: any = null;

  private initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));

  constructor(private chartService: HcChartService) {
  }

  ngOnInit() {
  }

  init(index: number) {
    if (this.initializedSub.getValue()) {
      return;
    }
    this.index = this.index || index;

    this.chartService.addSeries(this.getState());
    this.initializedSub.next(true);
  }

  private getState() {
    let state = {...this};
    delete state.chartService;
    delete state.initialized$;
    delete state.initializedSub;
    state = {...state, ...state.extra};
    return state;
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

    let updates = {} as SeriesOptions;
    for (const [key, value] of Object.entries(changes)) {
      if (value.isFirstChange()) {
        continue;
      }
      if (key === 'extra') {
        updates = {...updates, ...value.currentValue};
      }
      updates[key] = value.currentValue;
    }
    this.update(updates);
  }

  ngOnDestroy() {
    this.chartService.removeSeries(this.index);
  }
}
