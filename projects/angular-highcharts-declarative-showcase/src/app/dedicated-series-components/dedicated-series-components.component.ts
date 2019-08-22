import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dedicated-series-components',
  templateUrl: './dedicated-series-components.component.html'
})
export class DedicatedSeriesComponentsComponent implements OnInit {
  cartesianData = [1, 2, 4, 3, 0];
  areaData = [[0, 1, 2], [1, 4, 6], [2, 3, 4], [4, 5, 6]];
  bubbleData$ = interval(250).pipe(
    map(() =>
      Array(10)
        .fill(0)
        .map((v, ind) => ({ x: ind, y: ind, z: Math.random() * 40 }))
    )
  );
  pieData$ = interval(1000).pipe(
    startWith(0),
    map(i => [i, 60 - i])
  );

  scatterData$ = interval(100).pipe(map(i => [Math.random() * 40, Math.random() * 40]));
  constructor() {}

  ngOnInit() {}
}
