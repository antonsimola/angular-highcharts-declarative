import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-props',
  templateUrl: './extra-props.component.html'
})
export class ExtraPropsComponent implements OnInit {
  depData = [{ from: 'x', to: 'y', weight: 5 }, { from: 'y', to: 'z', weight: 10 }, { from: 'z', to: 'x', weight: 15 }];
  extraWheel = { curveFactor: 0.6 };

  constructor() {}

  ngOnInit() {}

  inputChange() {
    this.extraWheel = { ...this.extraWheel };
  }
}
