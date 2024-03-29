import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import {
  AxisAccessibilityOptionsObject,
  AxisCrosshairOptions, AxisDateTimeLabelFormatsOptions,
  AxisPointBreakEventObject,
  AxisSetExtremesEventObject,
  AxisTickPositionerCallbackFunction,
  AxisTypeValue,
  ColorString,
  DashStyleValue,
  OptionsGridLineInterpolationValue,
  OptionsMinorTickPositionValue,
  OptionsTickmarkPlacementValue,
  OptionsTickPositionValue,
  YAxisBreaksOptions,


  YAxisEventsOptions,
  YAxisGridOptions,
  YAxisLabelsOptions,
  YAxisOptions,
  YAxisPlotBandsOptions,
  YAxisPlotLinesOptions,
  YAxisResizeOptions,
  YAxisScrollbarOptions,
  YAxisStackLabelsOptions,
  YAxisTitleOptions
} from 'highcharts';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { registerEvents } from '../helpers';

@Component({
  selector: 'hc-y-axis',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcYAxisComponent implements OnInit, OnDestroy, OnChanges, YAxisOptions {
  // TODO Abstract axis
  @Input()
  accessibility?: object | AxisAccessibilityOptionsObject;
  @Input()
  alignTicks?: boolean;
  @Input()
  allowDecimals?: boolean;
  @Input()
  alternateGridColor?: ColorString;
  @Input()
  angle?: number;
  @Input()
  breaks?: Array<YAxisBreaksOptions>;
  @Input()
  categories?: Array<string>;
  @Input()
  ceiling?: number;
  @Input()
  className?: string;
  @Input()
  crosshair?: boolean | AxisCrosshairOptions;
  @Input()
  dateTimeLabelFormats?: AxisDateTimeLabelFormatsOptions;
  @Input()
  endOnTick?: boolean;
  @Input()
  events?: YAxisEventsOptions;
  @Input()
  floor?: number;
  @Input()
  grid?: YAxisGridOptions;
  @Input()
  gridLineColor?: ColorString;
  @Input()
  gridLineDashStyle?: DashStyleValue;
  @Input()
  gridLineInterpolation?: OptionsGridLineInterpolationValue;
  @Input()
  gridLineWidth?: number;
  @Input()
  gridZIndex?: number;
  @Input()
  height?: number | string;
  @Input()
  id?: string;
  @Input()
  labels?: YAxisLabelsOptions;
  @Input()
  lineColor?: ColorString;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: number;
  @Input()
  margin?: number;
  @Input()
  max?: number | null;
  @Input()
  maxColor?: ColorString;
  @Input()
  maxLength?: number | string;
  @Input()
  maxPadding?: number;
  @Input()
  maxRange?: number;
  @Input()
  maxZoom?: number;
  @Input()
  min?: number | null;
  @Input()
  minColor?: ColorString;
  @Input()
  minLength?: number | string;
  @Input()
  minorGridLineColor?: ColorString;
  @Input()
  minorGridLineDashStyle?: DashStyleValue;
  @Input()
  minorGridLineWidth?: number;
  @Input()
  minorTickColor?: ColorString;
  @Input()
  minorTickInterval?: number | string | null;
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
  pane?: number;
  @Input()
  plotBands?: Array<YAxisPlotBandsOptions>;
  @Input()
  plotLines?: Array<YAxisPlotLinesOptions>;
  @Input()
  range?: number;
  @Input()
  resize?: YAxisResizeOptions;
  @Input()
  reversed?: boolean;
  @Input()
  reversedStacks?: boolean;
  @Input()
  scrollbar?: YAxisScrollbarOptions;
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
  stackLabels?: YAxisStackLabelsOptions;
  @Input()
  startOfWeek?: number;
  @Input()
  startOnTick?: boolean;
  @Input()
  staticScale?: number;
  @Input()
  stops?: Array<[number, ColorString]>;
  @Input()
  tickAmount?: number;
  @Input()
  tickColor?: ColorString;
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
  tickWidth?: number;
  @Input()
  title?: YAxisTitleOptions;
  @Input()
  tooltipValueFormat?: string;
  @Input()
  top?: number | string;
  @Input()
  type?: AxisTypeValue;
  @Input()
  uniqueNames?: boolean;
  @Input()
  units?: Array<[string, (Array<number> | null)]>;
  @Input()
  visible?: boolean;
  @Input()
  index: number;
  @Input()
  width: any;

  @Output() afterBreaks = new EventEmitter<any>();
  @Output() afterSetExtremes = new EventEmitter<AxisSetExtremesEventObject>();
  @Output() pointBreak = new EventEmitter<AxisPointBreakEventObject>();
  @Output() pointInBreak = new EventEmitter<AxisPointBreakEventObject>();
  @Output() setExtremes = new EventEmitter<AxisSetExtremesEventObject>();

  protected initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));

  constructor(private chartService: HcChartService, private zone: NgZone) {
  }

  ngOnInit() {
  }

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

  ngOnDestroy() {
    this.chartService.removeYAxis(this.index);
  }

  update(props: Partial<YAxisOptions>) {
    this.chartService.updateYAxis(this.index, props);
  }

  private getState() {
    const state = { ...this };
    delete state.chartService;
    delete state.initialized$;
    delete state.initializedSub;
    return state;
  }
}
