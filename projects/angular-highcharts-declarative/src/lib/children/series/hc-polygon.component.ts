import { Component, Input, NgZone, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import {
  AnimationOptionsObject,
  ColorString, CursorValue, DashStyleValue,
  DataLabelsOptionsObject,
  GradientColorObject, OptionsBoostBlendingValue,
  OptionsFindNearestPointByValue,
  OptionsGapUnitValue,
  OptionsPointIntervalUnitValue,
  OptionsStackingValue,
  OptionsStepValue,
  PatternObject, PlotPolygonAccessibilityOptions, PlotPolygonAnimationOptions, PlotPolygonConnectorsOptions,
  PlotPolygonDataGroupingOptions,
  PlotPolygonDragDropOptions,
  PlotPolygonEventsOptions,
  PlotPolygonLabelOptions,
  PlotPolygonLastPriceOptions,
  PlotPolygonLastVisiblePriceOptions,
  PlotPolygonMarkerOptions,
  PlotPolygonPointOptions,
  PlotPolygonStatesOptions,
  PlotPolygonTooltipOptions,
  PlotPolygonZonesOptions,
  PlotSeriesOptions,
  SeriesLinecapValue,
  SeriesPolygonDataOptions,
  SeriesPolygonOptions
} from 'highcharts';
import { HcChartService } from '../../hc-chart.service';

@Component({
  selector: 'hc-polygon',
  template: `
      <ng-content select="hc-tooltip"></ng-content>
      <ng-content select="hc-point"></ng-content>
  `,  styles: [],
  providers: [{ provide: HcSeriesComponent, useExisting: HcPolygonComponent }]

})
export class HcPolygonComponent extends HcSeriesComponent implements OnInit, SeriesPolygonOptions {
  @Input()
  accessibility?: (object|PlotPolygonAccessibilityOptions);
  @Input()
  allAreas?: boolean;
  @Input()
  allowPointSelect?: boolean;
  @Input()
  animation?: (boolean|AnimationOptionsObject|PlotPolygonAnimationOptions);
  @Input()
  animationLimit?: number;
  @Input()
  boostBlending?: OptionsBoostBlendingValue;
  @Input()
  boostThreshold?: number;
  @Input()
  borderColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  borderWidth?: number;
  @Input()
  className?: string;
  @Input()
  clip?: boolean;
  @Input()
  color?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  colorAxis?: boolean;
  @Input()
  colorIndex?: number;
  @Input()
  compare?: string;
  @Input()
  compareBase?: (0|100);
  @Input()
  compareStart?: boolean;
  @Input()
  connectEnds?: boolean;
  @Input()
  connectNulls?: boolean;
  @Input()
  connectors?: PlotPolygonConnectorsOptions;
  @Input()
  cropThreshold?: number;
  @Input()
  cursor?: (string|CursorValue);
  @Input()
  dashStyle?: DashStyleValue;
  @Input()
  dataGrouping?: PlotPolygonDataGroupingOptions;
  @Input()
  dataLabels?: (DataLabelsOptionsObject|Array<DataLabelsOptionsObject>);
  @Input()
  description?: string;
  @Input()
  dragDrop?: PlotPolygonDragDropOptions;
  @Input()
  enableMouseTracking?: boolean;
  @Input()
  events?: PlotPolygonEventsOptions;
  @Input()
  findNearestPointBy?: OptionsFindNearestPointByValue;
  @Input()
  gapSize?: number;
  @Input()
  gapUnit?: OptionsGapUnitValue;
  @Input()
  getExtremesFromAll?: boolean;
  @Input()
  includeInDataExport?: boolean;
  @Input()
  joinBy?: (string|Array<string>);
  @Input()
  keys?: Array<string>;
  @Input()
  label?: PlotPolygonLabelOptions;
  @Input()
  lastPrice?: PlotPolygonLastPriceOptions;
  @Input()
  lastVisiblePrice?: PlotPolygonLastVisiblePriceOptions;
  @Input()
  linecap?: SeriesLinecapValue;
  @Input()
  lineWidth?: number;
  @Input()
  linkedTo?: string;
  @Input()
  marker?: PlotPolygonMarkerOptions;
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  @Input()
  negativeColor?: (ColorString|GradientColorObject|PatternObject);
  @Input()
  opacity?: number;
  @Input()
  point?: PlotPolygonPointOptions;
  @Input()
  pointDescriptionFormatter?: () => string;
  @Input()
  pointInterval?: number;
  @Input()
  pointIntervalUnit?: OptionsPointIntervalUnitValue;
  @Input()
  pointRange?: number;
  @Input()
  pointStart?: number;
  @Input()
  selected?: boolean;
  @Input()
  showCheckbox?: boolean;
  @Input()
  showInLegend?: boolean;
  @Input()
  showInNavigator?: boolean;
  @Input()
  skipKeyboardNavigation?: boolean;
  @Input()
  stacking?: OptionsStackingValue;
  states?: PlotPolygonStatesOptions;
  @Input()
  step?: OptionsStepValue;
  @Input()
  stickyTracking?: boolean;
  @Input()
  tooltip?: PlotPolygonTooltipOptions;
  trackByArea?: boolean;
  @Input()
  turboThreshold?: number;
  @Input()
  visible?: boolean;
  @Input()
  zIndex?: number;
  @Input()
  zoneAxis?: string;
  @Input()
  zones?: Array<PlotPolygonZonesOptions>;

  @Input()
  data?: Array<number | [(number | string), (number | null)] | null | SeriesPolygonDataOptions>;
  @Input()
  dataParser?: undefined;
  @Input()
  dataURL?: undefined;
  stack: undefined = null;

  type: 'polygon' = 'polygon';

  constructor(chartService: HcChartService, zone: NgZone) {
    super(chartService, zone);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
