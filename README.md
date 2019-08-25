# Angular (>=8.0) declarative Highcharts components

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
    <hc-title>Title</<hc-title> <!-- inputs TitleOptions. Use either [text] or specify inside the tag. InnerHTML is init only!-->
    <hc-subtitle>Subtitle</<hc-subtitle> <!--inputs SubtitleOptions, similar to hc-title-->
    <hc-legend></<hc-legend> <!--inputs LegendOptions-->
    <hc-tooltip></<hc-tooltip> <!--inputs TooltipOptions. It can be also specified inside a series component-->
    <hc-x-axis></<hc-x-axis> <!--Can omit if simple chart, inputs XAxisOptions-->
    <hc-y-axis></<hc-y-axis> <!--Can omit if simple chart, inputs YAxisOptions-->
    <hc-series></<hc-series> <!--inputs SeriesOptions + "extra"-->
    <hc-bar></hc-bar> <!--inputs SeriesBarOptions-->
    <hc-line></hc-line>
    <hc-pie></hc-pie> <!--etc-->
</hc-chart>
```

## Directives

As an alternative of providing axis index to series, you can also use hcXAxis / hcYAxis directive to match axis with series:

```html
<hc-x-axis #myAxis></<hc-x-axis>
<hc-series [hcXAxis]="myAxis"></<hc-series>
```

## Material styles

There's also optional Material design styles if you want to use the charts with Angular Material.

- Primary color is used as the first series color
- Fonts
- Tooltip
- Background color = Material theme card color 

1. Follow https://material.angular.io/guide/theming on how to add custom theme for your app if you haven't done already
2. In your styles.scss, where you normally define your Material theme, add:
```scss
$app-theme: mat-light-theme($app-primary, $app-accent, $app-warn); // this is your theme
$material-theme-for-highcharts: $app-theme; // !!! you must provide variable called $material-theme-for-highcharts that is your theme
@import '~angular-highcharts-declarative/styles/material-highcharts'; // !!! import the material-highcharts theme
@include angular-material-theme($app-theme); //load your theme with the mixin normally
```
- Material theme works in Highcharts styled mode. Thus you would probably prefer if all charts are in styled mode by default:
```typescript
//app.module.ts
import {HC_CHART_DEFAULTS} from 'angular-highcharts-declarative';    

@NgModule({
    providers: [
        {provide : HC_CHART_DEFAULTS, useValue: {styledMode:true}}
   ]
})
```

(see showcase code for full example)

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
- [x] Legend
- [ ] Tooltip formatter, other formatters
- [ ] Zaxis
- [ ] Drilldown
- [ ] Data
- [ ] Colors
- [ ] Better docs
- [ ] Performance when multiple updates happening at the same time? throttle?
- [x] Injection token for base settings for easy extension `HC_CHART_DEFAULTS`
- [x] Different component per series type? eg. hc-line, hc-bar (done: basic types)
- [ ] Plot options
- [ ] Tests
- [x] [extra] input for other components than series
- [x] Material design theme
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
