import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  NgZone,
  EventEmitter,
  Output
} from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import {
  AxisPointBreakEventObject,
  AxisSetExtremesEventObject,
  AxisTickPositionerCallbackFunction,
  AxisTypeValue,
  ColorString,
  DashStyleValue, GradientColorObject,
  OptionsMinorTickPositionValue,
  OptionsTickmarkPlacementValue,
  OptionsTickPositionValue, PatternObject,
  XAxisAccessibilityOptions,
  XAxisBreaksOptions,
  XAxisCrosshairOptions,
  XAxisCurrentDateIndicatorOptions,
  XAxisDateTimeLabelFormatsOptions, XAxisEventsOptions,
  XAxisGridOptions,
  XAxisLabelsOptions,
  XAxisOptions,
  XAxisPlotBandsOptions,
  XAxisPlotLinesOptions,
  XAxisScrollbarOptions,
  XAxisTitleOptions
} from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { registerEvents } from '../helpers';

@Component({
  selector: 'hc-x-axis',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcXAxisComponent implements OnInit, OnDestroy, OnChanges, XAxisOptions {
  @Input()
  accessibility?: (object|XAxisAccessibilityOptions);
  @Input()
  alignTicks?: boolean;
  @Input()
  allowDecimals?: boolean;
  @Input()
  alternateGridColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  breaks?: Array<XAxisBreaksOptions>;
  @Input()
  categories?: Array<string>;
  @Input()
  ceiling?: number;
  @Input()
  className?: string;
  @Input()
  crosshair?: (boolean|XAxisCrosshairOptions);
  @Input()
  currentDateIndicator?: (boolean|XAxisCurrentDateIndicatorOptions);
  @Input()
  dateTimeLabelFormats?: XAxisDateTimeLabelFormatsOptions;
  @Input()
  endOnTick?: boolean;
  @Input()
  events?: XAxisEventsOptions;
  @Input()
  floor?: number;
  @Input()
  grid?: XAxisGridOptions;
  @Input()
  gridLineColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  gridLineDashStyle?: DashStyleValue;
  @Input()
  gridLineWidth?: number;
  @Input()
  gridZIndex?: number;
  @Input()
  id?: string;
  @Input()
  labels?: XAxisLabelsOptions;
  @Input()
  lineColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: number;
  @Input()
  margin?: number;
  @Input()
  max?: (number|null);
  @Input()
  maxPadding?: number;
  @Input()
  maxRange?: number;
  @Input()
  min?: (number|null);
  @Input()
  minorGridLineColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  minorGridLineDashStyle?: DashStyleValue;
  @Input()
  minorGridLineWidth?: number;
  @Input()
  minorTickColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  minorTickInterval?: (number|string|null);
  @Input()
  minorTickLength?: number;
  @Input()
  minorTickPosition?: OptionsMinorTickPositionValue;
  @Input()
  minorTicks?: boolean;
  @Input()
  minorTickWidth?: number;
  @Input()
  minPadding?: number;
  @Input()
  minRange?: number;
  @Input()
  minTickInterval?: number;
  @Input()
  offset?: number;
  @Input()
  opposite?: boolean;
  @Input()
  ordinal?: boolean;
  @Input()
  overscroll?: number;
  @Input()
  pane?: number;
  @Input()
  plotBands?: Array<XAxisPlotBandsOptions>;
  @Input()
  plotLines?: Array<XAxisPlotLinesOptions>;
  @Input()
  range?: number;
  @Input()
  reversed?: boolean;
  @Input()
  reversedStacks?: boolean;
  @Input()
  scrollbar?: XAxisScrollbarOptions;
  @Input()
  showEmpty?: boolean;
  @Input()
  showFirstLabel?: boolean;
  @Input()
  showLastLabel?: boolean;
  @Input()
  softMax?: number;
  @Input()
  softMin?: number;
  @Input()
  startOfWeek?: number;
  @Input()
  startOnTick?: boolean;
  @Input()
  tickAmount?: number;
  @Input()
  tickColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  tickInterval?: number;
  @Input()
  tickLength?: number;
  @Input()
  tickmarkPlacement?: OptionsTickmarkPlacementValue;
  @Input()
  tickPixelInterval?: number;
  @Input()
  tickPosition?: OptionsTickPositionValue;
  @Input()
  tickPositioner?: AxisTickPositionerCallbackFunction;
  @Input()
  tickPositions?: Array<number>;
  @Input()
  tickWidth?: (number|undefined);
  @Input()
  title?: XAxisTitleOptions;
  @Input()
  type?: AxisTypeValue;
  @Input()
  uniqueNames?: boolean;
  @Input()
  units?: Array<[string, (Array<number>|null)]>;
  @Input()
  visible?: boolean;
  @Input()
  zoomEnabled?: boolean;

  @Input()
  index: number;


  @Output() afterBreaks = new EventEmitter<any>();
  @Output() afterSetExtremes = new EventEmitter<AxisSetExtremesEventObject>();
  @Output() pointBreak = new EventEmitter<AxisPointBreakEventObject>();
  @Output() pointInBreak = new EventEmitter<AxisPointBreakEventObject>();
  @Output() setExtremes = new EventEmitter<AxisSetExtremesEventObject>();

  private initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));

  constructor(private chartService: HcChartService, private zone: NgZone) {}

  ngOnInit() {}

  init(index: number) {
    if (this.initializedSub.getValue()) {
      return;
    }
    this.index = this.index || index;
    this.update({ ...this.getState(), ...{ events: registerEvents(this, this.zone, 'axis') } });
    this.initializedSub.next(true);
    this.initializedSub.complete();
  }

  ngOnChanges() {
    if (!this.initializedSub.getValue()) {
      return;
    }
    this.update(this.getState());
  }

  update(props: Partial<XAxisOptions>) {
    this.chartService.updateXAxis(this.index, props);
  }

  ngOnDestroy() {
    this.chartService.removeXAxis(this.index);
  }

  private getState() {
    const state = { ...this };
    delete state.chartService;
    delete state.initialized$;
    delete state.initializedSub;
    return state;
  }
}
