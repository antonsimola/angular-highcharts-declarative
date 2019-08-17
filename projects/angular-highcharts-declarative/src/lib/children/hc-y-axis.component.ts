import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import {
  AxisTickPositionerCallbackFunction,
  AxisTypeValue,
  ColorString,
  DashStyleValue,
  OptionsGridLineInterpolationValue,
  OptionsMinorTickPositionValue,
  OptionsTickmarkPlacementValue,
  OptionsTickPositionValue,
  YAxisAccessibilityOptions,
  YAxisBreaksOptions,
  YAxisCrosshairOptions,
  YAxisDateTimeLabelFormatsOptions,
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

@Component({
  selector: 'hc-y-axis',
  template: ``,
  styles: []
})
export class HcYAxisComponent implements OnInit, OnDestroy, OnChanges, YAxisOptions {
  @Input()
  accessibility?: object | YAxisAccessibilityOptions;
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
  crosshair?: boolean | YAxisCrosshairOptions;
  @Input()
  dateTimeLabelFormats?: YAxisDateTimeLabelFormatsOptions;
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

  protected initializedSub = new BehaviorSubject<boolean>(false);
  initialized$ = this.initializedSub.pipe(first(v => v));

  constructor(private chartService: HcChartService) {}

  ngOnInit() {}

  init(index: number) {
    if (this.initializedSub.getValue()) {
      return;
    }
    this.index = this.index || index;
    this.update(this.getState());
    this.initializedSub.next(true);
  }

  ngOnChanges() {
    if (!this.initializedSub.getValue()) {
      return;
    }
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
