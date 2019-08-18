# Angular (>8.0) declarative Highcharts components

Declarative and reactive wrapper for Highcharts.
Warning: fairly experimental and lacking some features still. Plan is to make it stable though.

Demo: https://antonsimola.github.io/angular-highcharts-declarative/

## Install

1. Highcharts if you don't have already: `npm i highcharts`
2. `npm i angular-highcharts-declarative`

## Usage

1. Import HcChartModule in your AppModule
2. Use `<hc-chart>` and the nested chart configuration like so:

```typescript
@Component({
  selector: 'app',
  template: `
    <hc-chart>
      <hc-title text="{{ title | uppercase }}"></hc-title>
      <hc-series [name]="seriesName" type="line" [data]="data"> </hc-series>
    </hc-chart>
  `
})
export class AppComponent {
  title = 'Simple chart';
  seriesName = 'Series 1';
  data = [1, 2, 3];
}
```

## Components

All components are OnPush, so you must assign new reference to trigger change detection.

eg. `data.push(1);` won't work, use `data = [...data, 1];`

```html
<hc-chart> <!--Inputs ChartOptions-->
    <hc-title>Title</<hc-title> <!-- inputs TitleOptions. Use either [text] or specify inside the tag-->
    <hc-subtitle>Subtitle</<hc-subtitle> <!--inputs SubtitleOptions. Use either [text] or specify inside the tag-->
    <hc-x-axis></<hc-x-axis> <!--Can omit if simple chart, inputs XAxisOptions-->
    <hc-y-axis></<hc-y-axis> <!--Can omit if simple chart, inputs YAxisOptions-->
    <hc-series></<hc-series> <!--inputs SeriesOptions + "extra"-->
</hc-chart>
```

## Directives

As an alternative of providing axis index to series, you can also use hcXAxis / hcYAxis directive to match axis with series:

```html
<hc-x-axis #myAxis></<hc-x-axis>
<hc-series [hcXAxis]="myAxis"></<hc-series>
```

## Tips

- Load extra modules by providing `HC_MODULES` (see showcase app.module)
- using "boost" module is recommended from Highcharts with big datasets (showcase uses it)

## Why

There are multiple Angular Highcharts libraries out there (see inspirations). This one moves configuration into the template and takes reactivity further than the other alternatives.

Declarative syntax makes it easier to create simple, reactive charts. For complex charts, you can still access the full chart object object with `(chartReady)` or `chart$` observable.

Pros compared to configuration based libraries:

- Easy to make reactive
- Easy to update after initialization: just assign input variable again
- Configuration merge logic (chart.update) is done by library
- Use pipes for displaying titles etc.
- Async data with async pipe
- OK performance because it runs updates and events outside NgZone by default

Shortcomings as of now:

- Needs performance optimizations when multiple updates happening at the same time
- Does not have all possible chart configurations as inputs (not right now at least).
  However you can pass special series configurations as _extra_ input

```html
<hc-series type="line" [extra]="{dashStyle:'ShortDash'}"></hc-series>
```

- See also Todo

## Todo

- [ ] Events for chart, series, points
- [ ] Legend
- [ ] Tooltip formatter, other formatters
- [ ] Zaxis
- [ ] Drilldown
- [ ] Data
- [ ] Colors
- [ ] Better docs
- [ ] Performance when multiple updates happening at the same time? throttle?
- [ ] Provider for base settings for easy extension
- [ ] Different component per series type? eg. <hc-line>, <hc-bar>...
- [ ] Plot options
- [ ] Tests
- [ ] "extra" input for other components than series
- [x] Series [dataStream] attribute for real time charts (see simple realtime demo)
- [x] Alternatively configure title or subtitle simply with innerhtml: `<hc-title>My title</hc-title`
- [x] Expose underlying chart reference
- [x] Update methods per component
- [x] Link axis <-> series with template reference

## Inspirations

- https://github.com/cebor/angular-highcharts
- https://github.com/kiwigrid/angular2-highcharts
- https://github.com/highcharts/highcharts-angular
- https://github.com/recharts/recharts

## Licence

This wrapper is MIT. You must also comply to Highcharts license!
