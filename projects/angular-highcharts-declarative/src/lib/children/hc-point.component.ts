import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {
  PointClickEventObject,
  PointDragEventObject,
  PointDragStartEventObject,
  PointInteractionEventObject,
  PointUpdateEventObject
} from 'highcharts';
import {PointDropEventObject} from 'highcharts/highcharts';

@Component({
  selector: 'hc-point',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcPointComponent {
  @Output() clickPoint = new EventEmitter<PointClickEventObject>();
  @Output() dragPoint = new EventEmitter<PointDragEventObject>();
  @Output() dragStart = new EventEmitter<PointDragStartEventObject>();
  @Output() dropPoint = new EventEmitter<PointDropEventObject>();
  @Output() mouseOut = new EventEmitter<PointerEvent>();
  @Output() mouseOver = new EventEmitter<PointerEvent>();
  @Output() remove = new EventEmitter<Event>();
  @Output() selectPoint = new EventEmitter<PointInteractionEventObject>();
  @Output() unselect = new EventEmitter<PointInteractionEventObject>();
  @Output() update = new EventEmitter<PointUpdateEventObject>();
}
