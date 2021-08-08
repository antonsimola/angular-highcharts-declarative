import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges
} from '@angular/core';
import {
  Series,
  SeriesAfterAnimateEventObject,
  SeriesCheckboxClickEventObject,
  SeriesClickEventObject,
  SeriesMapDataOptions,
  SeriesOptions,
  SeriesLegendItemClickEventObject
} from 'highcharts';
import { HcChartService } from '../hc-chart.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { changesToFlat, registerEvents } from '../helpers';
import { HcTooltipComponent } from './hc-tooltip.component';
import { HcPointComponent } from './hc-point.component';

@Component({
  selector: 'hc-series',
  template: `
    <ng-content select='hc-tooltip'></ng-content>
    <ng-content select='hc-point'></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcSeriesComponent implements OnInit, OnDestroy, OnChanges, SeriesOptions, AfterContentInit {
  @HostBinding('class.hc-series') seriesClass = true;
  @Input()
  id?: string;
  @Input()
  index?: number;
  @Input()
  legendIndex?: number;
  @Input()
  mapData?: Array<SeriesMapDataOptions> | any;
  @Input()
  stack?: string | number;
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

  @Output() public afterAnimate = new EventEmitter<SeriesAfterAnimateEventObject>();
  @Output() public checkboxClick = new EventEmitter<SeriesCheckboxClickEventObject>();
  @Output() public clickSeries = new EventEmitter<SeriesClickEventObject>();
  @Output() public hide = new EventEmitter<Event>();
  @Output() public legendItemClick = new EventEmitter<SeriesLegendItemClickEventObject>();
  @Output() public mouseOut = new EventEmitter<PointerEvent>();
  @Output() public mouseOver = new EventEmitter<PointerEvent>();
  @Output() public showSeries = new EventEmitter<Event>();

  @ContentChildren(HcTooltipComponent) tooltips: QueryList<HcTooltipComponent>;
  @ContentChild(HcPointComponent) hcPoint: HcPointComponent;

  private initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));
  private dataSub: Subscription;
  private changesSub: Subscription;
  private rawSeries: Series;

  constructor(private chartService: HcChartService, private zone: NgZone) {
  }

  ngOnInit() {
    this.initialized$.subscribe(() => {
      if (this.dataStream) {
        this.registerDataStream();
      }
    });
  }

  ngAfterContentInit() {
    if (this.hcPoint) {
      this.initialized$.subscribe(_ => {
        this.update({ point: { events: registerEvents(this.hcPoint, this.zone, 'point') } } as any);
      });
    }
  }

  private registerDataStream() {
    this.dataSub = this.dataStream.subscribe(v => {
      this.addPoint(v, this.dataStreamShift);
    });
  }

  init(index: number) {
    if (this.initializedSub.getValue()) {
      return;
    }
    this.index = this.index || index;
    this.chartService.addSeries(
      { ...this.getState(), ...{ events: registerEvents(this, this.zone, 'series') } },
      (series: Series) => {
        this.rawSeries = series;
        this.changesSub = this.tooltips.changes.subscribe(() => this.tooltips.forEach(t => t.setSeries(this.index)));
        this.tooltips.forEach(t => t.setSeries(this.index));
        this.initializedSub.next(true);
        this.initializedSub.complete();
      }
    );
  }

  private getState() {
    let state = { ...this };
    delete state.chartService;
    delete state.initialized$;
    delete state.initializedSub;
    delete state.dataStream;
    delete state.dataStreamShift;
    delete state.dataSub;
    delete state.zone;
    delete state.hcPoint;
    delete state.rawSeries;
    state = { ...state, ...state.extra };
    for (const [key, value] of Object.entries(state)) {
      if (value === null) {
        delete state[key];
      }
    }
    return state;
  }

  addPoint(value: any, shift = this.dataStreamShift) {
    this.rawSeries.addPoint(value, this.chartService.autoRedraw, shift);
  }

  update(props: Partial<SeriesOptions>) {
    this.rawSeries.update(props as any, this.chartService.autoRedraw);
  }

  updateSeriesData(data: any) {
    this.rawSeries.setData(data, this.chartService.autoRedraw);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.initializedSub.getValue()) {
      return;
    }
    if (changes.data && !changes.data.isFirstChange()) {
      this.updateSeriesData(changes.data.currentValue);
    }
    if (changes.dataStream && !changes.dataStream.isFirstChange()) {
      if (this.dataSub) {
        this.dataSub.unsubscribe();
      }
      this.registerDataStream();
    }

    delete changes.data;
    delete changes.dataStream;
    this.update(changesToFlat(changes));
  }

  ngOnDestroy() {
    if (this.dataSub) {
      this.dataSub.unsubscribe();
    }
    if (this.changesSub) {
      this.changesSub.unsubscribe();
    }
    if (this.rawSeries) {
      if (typeof (this.rawSeries.remove) === 'function' && this.chartService.getChartInstance() && this.rawSeries.chart) {
        this.rawSeries.remove(this.chartService.autoRedraw);
      } else if (this.chartService.getChartInstance()) {
        this.chartService.removeSeries(this.index);
      }
      this.rawSeries = null;
    }
  }
}
