import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, scan, share } from 'rxjs/operators';

@Component({
  selector: 'app-simple-realtime',
  template: `
    <hc-chart [extra]="{ boost: { enabled: false }, exporting: { enabled: false } }">
      <hc-title [text]="'' + (pointCount$ | async)"></hc-title>
      <!-- Provide initial [data] along with shift, otherwise  would display one point at a time. Essentially it is the "window size"-->
      <hc-series
        type="spline"
        [dataStream]="data$"
        [dataStreamShift]="true"
        [data]="[0, 0, 0, 0, 0, 0, 0, 0]"
      ></hc-series>
    </hc-chart>
  `
})
export class SimpleRealtimeComponent {
  data$ = interval(1000).pipe(
    map(i => Math.random() * 40),
    share()
  );
  pointCount$ = this.data$.pipe(scan((acc, cur) => acc + 1, 7));
}
