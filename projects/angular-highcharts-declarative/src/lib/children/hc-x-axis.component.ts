import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HcChartService } from '../hc-chart.service';
import {
  AxisTickPositionerCallbackFunction,
  AxisTypeValue,
  ColorString,
  DashStyleValue,
  OptionsMinorTickPositionValue,
  OptionsTickmarkPlacementValue,
  OptionsTickPositionValue,
  XAxisAccessibilityOptions,
  XAxisBreaksOptions,
  XAxisCrosshairOptions,
  XAxisCurrentDateIndicatorOptions,
  XAxisDateTimeLabelFormatsOptions,
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

@Component({
  selector: 'hc-x-axis',
  template: ``,
  styles: []
})
export class HcXAxisComponent implements OnInit, OnDestroy, OnChanges, XAxisOptions {
  @Input()
  accessibility?: object | XAxisAccessibilityOptions;
  @Input()
  alignTicks?: boolean;
  @Input()
  allowDecimals?: boolean;
  @Input()
  alternateGridColor?: ColorString;
  @Input()
  breaks?: Array<XAxisBreaksOptions>;
  @Input()
  ceiling?: number;
  @Input()
  className?: string;
  @Input()
  crosshair?: boolean | XAxisCrosshairOptions;
  @Input()
  currentDateIndicator?: boolean | XAxisCurrentDateIndicatorOptions;
  @Input()
  dateTimeLabelFormats?: XAxisDateTimeLabelFormatsOptions;
  @Input()
  endOnTick?: boolean;
  @Input()
  floor?: number;
  @Input()
  grid?: XAxisGridOptions;
  @Input()
  gridLineColor?: ColorString;
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
  maxPadding?: number;
  @Input()
  maxRange?: number;
  @Input()
  maxZoom?: number;
  @Input()
  min?: number | null;
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
  tickWidth?: number | undefined;
  @Input()
  title?: XAxisTitleOptions;
  @Input()
  type?: AxisTypeValue;
  @Input()
  uniqueNames?: boolean;
  @Input()
  units?: Array<[string, (Array<number> | null)]>;
  @Input()
  visible?: boolean;

  @Input()
  index = 0;
  private initializedSub = new BehaviorSubject<boolean>(false);
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
