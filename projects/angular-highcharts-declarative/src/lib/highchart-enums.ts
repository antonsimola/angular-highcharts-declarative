export const HC_CHART_TYPES = [
  'area',
  'arearange',
  'areaspline',
  'areasplinerange',
  'bar',
  'bellcurve',
  'boxplot',
  'bubble',
  'bullet',
  'column',
  'columnpyramid',
  'columnrange',
  'cylinder',
  'dependencywheel',
  'errorbar',
  'funnel',
  'funnel3d',
  'gauge',
  'heatmap',
  'histogram',
  'item',
  'line',
  'networkgraph',
  'organization',
  'packedbubble',
  'pareto',
  'pie',
  'polygon',
  'pyramid',
  'pyramid3d',
  'sankey',
  'scatter',
  'scatter3d',
  'solidgauge',
  'spline',
  'streamgraph',
  'sunburst',
  'tilemap',
  'timeline',
  'treemap',
  'variablepie',
  'variwide',
  'vector',
  'venn',
  'waterfall',
  'windbarb',
  'wordcloud',
  'xrange'
];

export const HC_EVENTS = {
  chart: [
    'addSeries',
    'afterPrint',
    'beforePrint',
    { event: 'click', emitter: 'clickChart' },
    'drilldown',
    'drillup',
    'drillupall',
    { event: 'load', emitter: 'loadChart' },
    'redraw',
    'render',
    'selection'
  ],
  series: [
    'afterAnimate',
    'checkboxClick',
    { event: 'click', emitter: 'clickSeries' },
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    { event: 'show', emitter: 'showSeries' }
  ],
  point: [
    { event: 'click', emitter: 'clickPoint' },
    { event: 'drag', emitter: 'dragPoint' },
    'dragStart',
    { event: 'drop', emitter: 'dropPoint' },
    'mouseOut',
    'mouseOver',
    'remove',
    { event: 'select', emitter: 'selectPoint' },
    'unselect',
    'update'
  ],
  axis: ['afterBreaks', 'afterSetExtremes', 'pointBreak', 'pointInBreak', 'setExtremes']
};
// import { capitalize } from './helpers';
// console.log(
//   HC_CHART_TYPES.reduce((acc, type) => {
//     acc += `    <ng-content select="hc-${type}"></ng-content>\n`;
//     return acc;
//   })
// );
//
// console.log(
//   HC_CHART_TYPES.reduce((acc, type) => {
//     acc += `    @ContentChildren(Hc${capitalize(type)}Component) private ${type}s: QueryList<Hc${capitalize(
//       type
//     )}Component>;\n`;
//     return acc;
//   })
// );
//
// console.log(
//   HC_CHART_TYPES.reduce((acc, type) => {
//     acc += `    export * from './lib/children/series/hc-${type}.component';\n`;
//     return acc;
//   })
// );
