import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-simple-realtime',
  template: `
    <hc-chart styledMode="true" [animation]="true" [extra]="{ boost: { enabled: false }, exporting: { enabled: false } }">
      <hc-title [text]="''"></hc-title>
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
}
