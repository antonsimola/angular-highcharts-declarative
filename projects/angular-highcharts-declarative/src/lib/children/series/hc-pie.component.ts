import { ChangeDetectionStrategy, Component, Input, NgZone, OnInit } from '@angular/core';
import { HcSeriesComponent } from '../hc-series.component';
import { HcChartService } from '../../hc-chart.service';
import {
  AnimationOptionsObject,
  ColorString,
  CursorValue,
  DataGroupingOptionsObject,
  Dictionary,
  GradientColorObject,
  OptionsGapUnitValue,
  PatternObject,
  PlotPieAnimationOptions, PlotSeriesOptions, PlotSeriesPointOptions, PointOptionsObject,
  SeriesAccessibilityOptionsObject,
  SeriesConnectorsOptionsObject,
  SeriesEventsOptionsObject,
  SeriesLastPriceOptionsObject, SeriesLastVisiblePriceOptionsObject, SeriesLinecapValue,
  SeriesPieDataLabelsOptionsObject,
  SeriesPieOptions, SeriesStatesOptionsObject, SeriesTooltipOptionsObject, ShadowOptionsObject
} from 'highcharts';

@Component({
  selector: 'hc-pie',
  template: `
    <ng-content select='hc-tooltip'></ng-content>
    <ng-content select='hc-point'></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: HcSeriesComponent, useExisting: HcPieComponent }]
})
export class HcPieComponent extends HcSeriesComponent implements OnInit, SeriesPieOptions {

  /**
   * (Highcharts) Accessibility options for a series.
   */
  @Input()
  accessibility?: SeriesAccessibilityOptionsObject;
  /**
   * (Highmaps) Whether all areas of the map defined in `mapData` should be
   * rendered. If `true`, areas which don't correspond to a data point, are
   * rendered as `null` points. If `false`, those areas are skipped.
   */
  @Input()
  allAreas?: boolean;
  /**
   * (Highcharts) Allow this series' points to be selected by clicking on the
   * graphic (columns, point markers, pie slices, map areas etc).
   *
   * The selected points can be handled by point select and unselect events,
   * or collectively by the getSelectedPoints function.
   *
   * And alternative way of selecting points is through dragging.
   */
  @Input()
  allowPointSelect?: boolean;
  /**
   * (Highcharts) Enable or disable the initial animation when a series is
   * displayed. The animation can also be set as a configuration object.
   * Please note that this option only applies to the initial animation of the
   * series itself. For other animations, see chart.animation and the
   * animation parameter under the API methods. The following properties are
   * supported:
   *
   * - `defer`: The animation delay time in milliseconds.
   *
   * - `duration`: The duration of the animation in milliseconds.
   *
   * - `easing`: Can be a string reference to an easing function set on the
   * `Math` object or a function. See the _Custom easing function_ demo below.
   *
   * Due to poor performance, animation is disabled in old IE browsers for
   * several chart types.
   */
  @Input()
  animation?: (boolean | PlotPieAnimationOptions | Partial<AnimationOptionsObject>);
  /**
   * (Highcharts) The color of the border surrounding each slice. When `null`,
   * the border takes the same color as the slice fill. This can be used
   * together with a `borderWidth` to fill drawing gaps created by
   * antialiazing artefacts in borderless pies.
   *
   * In styled mode, the border stroke is given in the `.highcharts-point`
   * class.
   */
  @Input()
  borderColor?: (ColorString | GradientColorObject | PatternObject);
  /**
   * (Highcharts) The width of the border surrounding each slice.
   *
   * When setting the border width to 0, there may be small gaps between the
   * slices due to SVG antialiasing artefacts. To work around this, keep the
   * border width at 0.5 or 1, but set the `borderColor` to `null` instead.
   *
   * In styled mode, the border stroke width is given in the
   * `.highcharts-point` class.
   */
  @Input()
  borderWidth?: number;
  /**
   * (Highcharts) The center of the pie chart relative to the plot area. Can
   * be percentages or pixel values. The default behaviour (as of 3.0) is to
   * center the pie so that all slices and data labels are within the plot
   * area. As a consequence, the pie may actually jump around in a chart with
   * dynamic values, as the data labels move. In that case, the center should
   * be explicitly set, for example to `["50%", "50%"]`.
   */
  @Input()
  center?: [(number | string | null), (number | string | null)];
  /**
   * (Highcharts) An additional class name to apply to the series' graphical
   * elements. This option does not replace default class names of the
   * graphical element.
   */
  @Input()
  className?: string;
  /**
   * (Highcharts) Disable this option to allow series rendering in the whole
   * plotting area.
   *
   * **Note:** Clipping should be always enabled when chart.zoomType is set
   */
  @Input()
  clip?: boolean;
  /**
   * (Highcharts) The color of the pie series. A pie series is represented as
   * an empty circle if the total sum of its values is 0. Use this property to
   * define the color of its border.
   *
   * In styled mode, the color can be defined by the colorIndex option. Also,
   * the series color can be set with the `.highcharts-series`,
   * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
   * `.highcharts-series-{n}` class, or individual classes given by the
   * `className` option.
   */
  @Input()
  color?: (ColorString | GradientColorObject | PatternObject);
  /**
   * (Highcharts, Highstock, Highmaps) When using dual or multiple color axes,
   * this number defines which colorAxis the particular series is connected
   * to. It refers to either the axis id or the index of the axis in the
   * colorAxis array, with 0 being the first. Set this option to false to
   * prevent a series from connecting to the default color axis.
   *
   * Since v7.2.0 the option can also be an axis id or an axis index instead
   * of a boolean flag.
   */
  @Input()
  colorAxis?: (boolean | number | string);
  /**
   * (Highcharts) Styled mode only. A specific color index to use for the
   * series, so its graphic representations are given the class name
   * `highcharts-color-{n}`.
   */
  @Input()
  colorIndex?: number;
  /**
   * (Highcharts, Highstock, Highmaps) Determines what data value should be
   * used to calculate point color if `colorAxis` is used. Requires to set
   * `min` and `max` if some custom point property is used or if approximation
   * for data grouping is set to `'sum'`.
   */
  @Input()
  colorKey?: string;
  /**
   * (Highcharts) A series specific or series type specific color set to use
   * instead of the global colors.
   */
  @Input()
  colors?: Array<(ColorString | GradientColorObject | PatternObject)>;
  /**
   * (Highstock) Compare the values of the series against the first non-null,
   * non- zero value in the visible range. The y axis will show percentage or
   * absolute change depending on whether `compare` is set to `"percent"` or
   * `"value"`. When this is applied to multiple series, it allows comparing
   * the development of the series against each other. Adds a `change` field
   * to every point object.
   */
  @Input()
  compare?: string;
  /**
   * (Highstock) When compare is `percent`, this option dictates whether to
   * use 0 or 100 as the base of comparison.
   */
  @Input()
  compareBase?: (0 | 100);
  /**
   * (Highstock) Defines if comparison should start from the first point
   * within the visible range or should start from the first point **before**
   * the range.
   *
   * In other words, this flag determines if first point within the visible
   * range will have 0% (`compareStart=true`) or should have been already
   * calculated according to the previous point (`compareStart=false`).
   */
  @Input()
  compareStart?: boolean;
  /**
   * (Gantt) Override Pathfinder connector options for a series. Requires
   * Highcharts Gantt to be loaded.
   */
  @Input()
  connectors?: SeriesConnectorsOptionsObject;
  /**
   * (Highcharts, Highstock, Gantt) When true, each point or column edge is
   * rounded to its nearest pixel in order to render sharp on screen. In some
   * cases, when there are a lot of densely packed columns, this leads to
   * visible difference in column widths or distance between columns. In these
   * cases, setting `crisp` to `false` may look better, even though each
   * column is rendered blurry.
   */
  @Input()
  crisp?: boolean;
  /**
   * (Highcharts) You can set the cursor to "pointer" if you have click events
   * attached to the series, to signal to the user that the points and lines
   * can be clicked.
   *
   * In styled mode, the series cursor can be set with the same classes as
   * listed under series.color.
   */
  @Input()
  cursor?: (string | CursorValue);
  /**
   * (Highcharts) A reserved subspace to store options and values for
   * customized functionality. Here you can add additional data for your own
   * event callbacks and formatter callbacks.
   */
  @Input()
  custom?: Dictionary<any>;
  /**
   * (Highstock) Data grouping is the concept of sampling the data values into
   * larger blocks in order to ease readability and increase performance of
   * the JavaScript charts. Highcharts Stock by default applies data grouping
   * when the points become closer than a certain pixel value, determined by
   * the `groupPixelWidth` option.
   *
   * If data grouping is applied, the grouping information of grouped points
   * can be read from the Point.dataGroup. If point options other than the
   * data itself are set, for example `name` or `color` or custom properties,
   * the grouping logic doesn't know how to group it. In this case the options
   * of the first point instance are copied over to the group point. This can
   * be altered through a custom `approximation` callback function.
   */
  @Input()
  dataGrouping?: DataGroupingOptionsObject;
  /**
   * (Highcharts, Highstock, Highmaps, Gantt) Options for the series data
   * labels, appearing next to each data point.
   *
   * Since v6.2.0, multiple data labels can be applied to each single point by
   * defining them as an array of configs.
   *
   * In styled mode, the data labels can be styled with the
   * `.highcharts-data-label-box` and `.highcharts-data-label` class names
   * (see example).
   */
  @Input()
  dataLabels?: (SeriesPieDataLabelsOptionsObject | Array<SeriesPieDataLabelsOptionsObject>);
  /**
   * (Highcharts) The thickness of a 3D pie.
   */
  @Input()
  depth?: number;
  /**
   * (Highcharts) A description of the series to add to the screen reader
   * information about the series.
   */
  @Input()
  description?: string;
  /**
   * (Highcharts) Enable or disable the mouse tracking for a specific series.
   * This includes point tooltips and click events on graphs and points. For
   * large datasets it improves performance.
   */
  @Input()
  enableMouseTracking?: boolean;
  /**
   * (Highcharts) The end angle of the pie in degrees where 0 is top and 90 is
   * right. Defaults to `startAngle` plus 360.
   */
  @Input()
  endAngle?: number;
  /**
   * (Highcharts) General event handlers for the series items. These event
   * hooks can also be attached to the series at run time using the
   * `Highcharts.addEvent` function.
   */
  @Input()
  events?: SeriesEventsOptionsObject;
  /**
   * (Highcharts) If the total sum of the pie's values is 0, the series is
   * represented as an empty circle . The `fillColor` option defines the color
   * of that circle. Use pie.borderWidth to set the border thickness.
   */
  @Input()
  fillColor?: (ColorString | GradientColorObject | PatternObject);
  /**
   * (Highstock) Defines when to display a gap in the graph, together with the
   * gapUnit option.
   *
   * In case when `dataGrouping` is enabled, points can be grouped into a
   * larger time span. This can make the grouped points to have a greater
   * distance than the absolute value of `gapSize` property, which will result
   * in disappearing graph completely. To prevent this situation the mentioned
   * distance between grouped points is used instead of previously defined
   * `gapSize`.
   *
   * In practice, this option is most often used to visualize gaps in time
   * series. In a stock chart, intraday data is available for daytime hours,
   * while gaps will appear in nights and weekends.
   */
  @Input()
  gapSize?: number;
  /**
   * (Highstock) Together with gapSize, this option defines where to draw gaps
   * in the graph.
   *
   * When the `gapUnit` is `"relative"` (default), a gap size of 5 means that
   * if the distance between two points is greater than 5 times that of the
   * two closest points, the graph will be broken.
   *
   * When the `gapUnit` is `"value"`, the gap is based on absolute axis
   * values, which on a datetime axis is milliseconds. This also applies to
   * the navigator series that inherits gap options from the base series.
   */
  @Input()
  gapUnit?: OptionsGapUnitValue;
  /**
   * (Highcharts) Equivalent to chart.ignoreHiddenSeries, this option tells
   * whether the series shall be redrawn as if the hidden point were `null`.
   *
   * The default value changed from `false` to `true` with Highcharts 3.0.
   */
  @Input()
  ignoreHiddenPoint?: boolean;
  /**
   * (Highcharts) When set to `false` will prevent the series data from being
   * included in any form of data export.
   *
   * Since version 6.0.0 until 7.1.0 the option was existing undocumented as
   * `includeInCSVExport`.
   */
  @Input()
  includeInDataExport?: boolean;
  /**
   * (Highcharts) The size of the inner diameter for the pie. A size greater
   * than 0 renders a donut chart. Can be a percentage or pixel value.
   * Percentages are relative to the pie size. Pixel values are given as
   * integers.
   *
   * Note: in Highcharts < 4.1.2, the percentage was relative to the plot
   * area, not the pie size.
   */
  @Input()
  innerSize?: (number | string);
  /**
   * (Highmaps) What property to join the `mapData` to the value data. For
   * example, if joinBy is "code", the mapData items with a specific code is
   * merged into the data with the same code. For maps loaded from GeoJSON,
   * the keys may be held in each point's `properties` object.
   *
   * The joinBy option can also be an array of two values, where the first
   * points to a key in the `mapData`, and the second points to another key in
   * the `data`.
   *
   * When joinBy is `null`, the map items are joined by their position in the
   * array, which performs much better in maps with many data points. This is
   * the recommended option if you are printing more than a thousand data
   * points and have a backend that can preprocess the data into a parallel
   * array of the mapData.
   */
  @Input()
  joinBy?: (string | Array<string>);
  /**
   * (Highcharts) An array specifying which option maps to which key in the
   * data point array. This makes it convenient to work with unstructured data
   * arrays from different sources.
   */
  @Input()
  keys?: Array<string>;
  /**
   * (Highstock) The line marks the last price from all points.
   */
  @Input()
  lastPrice?: SeriesLastPriceOptionsObject;
  /**
   * (Highstock) The line marks the last price from visible range of points.
   */
  @Input()
  lastVisiblePrice?: SeriesLastVisiblePriceOptionsObject;
  /**
   * (Highcharts, Highstock) The SVG value used for the `stroke-linecap` and
   * `stroke-linejoin` of a line graph. Round means that lines are rounded in
   * the ends and bends.
   */
  @Input()
  linecap?: SeriesLinecapValue;
  /**
   * (Highcharts, Highstock, Gantt) The id of another series to link to.
   * Additionally, the value can be ":previous" to link to the previous
   * series. When two series are linked, only the first one appears in the
   * legend. Toggling the visibility of this also toggles the linked series.
   *
   * If master series uses data sorting and linked series does not have its
   * own sorting definition, the linked series will be sorted in the same
   * order as the master one.
   */
  @Input()
  linkedTo?: string;
  /**
   * (Highcharts) The minimum size for a pie in response to auto margins. The
   * pie will try to shrink to make room for data labels in side the plot
   * area, but only to this size.
   */
  @Input()
  minSize?: (number | string);
  /**
   * (Highstock) Options for the corresponding navigator series if
   * `showInNavigator` is `true` for this series. Available options are the
   * same as any series, documented at plotOptions and series.
   *
   * These options are merged with options in navigator.series, and will take
   * precedence if the same option is defined both places.
   */
  @Input()
  navigatorOptions?: PlotSeriesOptions;
  /**
   * (Highcharts) Opacity of a series parts: line, fill (e.g. area) and
   * dataLabels.
   */
  @Input()
  opacity?: number;
  /**
   * (Highcharts) Properties for each single point.
   */
  @Input()
  point?: PlotSeriesPointOptions;
  /**
   * (Highcharts) Same as accessibility.series.descriptionFormatter, but for
   * an individual series. Overrides the chart wide configuration.
   */
  @Input()
  pointDescriptionFormatter?: (value: any) => any;
  /**
   * (Highstock) The width of each point on the x axis. For example in a
   * column chart with one value each day, the pointRange would be 1 day (= 24
   * * 3600
   *
   * * 1000 milliseconds). This is normally computed automatically, but this
   * option can be used to override the automatic value.
   */
  @Input()
  pointRange?: number;
  /**
   * (Highcharts) Whether to select the series initially. If `showCheckbox` is
   * true, the checkbox next to the series name in the legend will be checked
   * for a selected series.
   */
  @Input()
  selected?: boolean;
  /**
   * (Highcharts) Whether to apply a drop shadow to the graph line. Since 2.3
   * the shadow can be an object configuration containing `color`, `offsetX`,
   * `offsetY`, `opacity` and `width`.
   */
  @Input()
  shadow?: (boolean | ShadowOptionsObject);
  /**
   * (Highcharts) If true, a checkbox is displayed next to the legend item to
   * allow selecting the series. The state of the checkbox is determined by
   * the `selected` option.
   */
  @Input()
  showCheckbox?: boolean;
  /**
   * (Highcharts) Whether to display this particular series or series type in
   * the legend. Since 2.1, pies are not shown in the legend by default.
   */
  @Input()
  showInLegend?: boolean;
  /**
   * (Highstock) Whether or not to show the series in the navigator. Takes
   * precedence over navigator.baseSeries if defined.
   */
  @Input()
  showInNavigator?: boolean;
  /**
   * (Highcharts) The diameter of the pie relative to the plot area. Can be a
   * percentage or pixel value. Pixel values are given as integers. The
   * default behaviour (as of 3.0) is to scale to the plot area and give room
   * for data labels within the plot area. slicedOffset is also included in
   * the default size calculation. As a consequence, the size of the pie may
   * vary when points are updated and data labels more around. In that case it
   * is best to set a fixed value, for example `"75%"`.
   */
  @Input()
  size?: (number | string | null);
  /**
   * (Highcharts) If set to `true`, the accessibility module will skip past
   * the points in this series for keyboard navigation.
   */
  @Input()
  skipKeyboardNavigation?: boolean;
  /**
   * (Highcharts) If a point is sliced, moved out from the center, how many
   * pixels should it be moved?.
   */
  @Input()
  slicedOffset?: number;
  /**
   * (Highcharts) The start angle of the pie slices in degrees where 0 is top
   * and 90 right.
   */
  @Input()
  startAngle?: number;
  states?: SeriesStatesOptionsObject;
  /**
   * (Highcharts) Sticky tracking of mouse events. When true, the `mouseOut`
   * event on a series isn't triggered until the mouse moves over another
   * series, or out of the plot area. When false, the `mouseOut` event on a
   * series is triggered when the mouse leaves the area around the series'
   * graph or markers. This also implies the tooltip. When `stickyTracking` is
   * false and `tooltip.shared` is false, the tooltip will be hidden when
   * moving the mouse between series.
   */
  @Input()
  stickyTracking?: boolean;
  /**
   * (Highcharts) A configuration object for the tooltip rendering of each
   * single series. Properties are inherited from tooltip, but only the
   * following properties can be defined on a series level.
   */
  @Input()
  tooltip?: SeriesTooltipOptionsObject;
  /**
   * (Highstock) The parameter allows setting line series type and use OHLC
   * indicators. Data in OHLC format is required.
   */
  @Input()
  useOhlcData?: boolean;
  /**
   * (Highcharts) Set the initial visibility of the series.
   */
  @Input()
  visible?: boolean;
  /**
   * (Highmaps) Define the z index of the series.
   */
  @Input()
  zIndex?: number;


  /**
   * (Highcharts) An array of data points for the series. For the `pie` series
   * type, points can be given in the following ways:
   *
   * 1. An array of numerical values. In this case, the numerical values will
   * be interpreted as `y` options. Example: (see online documentation for
   * example)
   *
   * 2. An array of objects with named values. The following snippet shows
   * only a few settings, see the complete options set below. If the total
   * number of data points exceeds the series' turboThreshold, this option is
   * not available. (see online documentation for example)
   */
  @Input()
  data?: Array<(number | [string, (number | null)] | null | PointOptionsObject)>;
  /**
   * Not available
   */
  @Input()
  dataParser?: undefined;
  /**
   * Not available
   */
  @Input()
  dataURL?: undefined;
  /**
   * Not available
   */
  @Input()
  stack?: undefined;
  /**
   * Not available
   */
  @Input()
  xAxis?: undefined;
  /**
   * Not available
   */
  @Input()
  yAxis?: undefined;

  @Input()
  type: 'pie' = 'pie';

  constructor(chartService: HcChartService, zone: NgZone) {
    super(chartService, zone);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
