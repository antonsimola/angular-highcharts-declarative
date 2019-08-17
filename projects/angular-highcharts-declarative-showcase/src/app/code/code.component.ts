import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html'
})
export class CodeComponent implements OnInit {
  @Input()
  files: string[] = [];

  fileContents = {};

  prefix =
    'https://raw.githubusercontent.com/antonsimola/angular-highcharts-declarative/master/projects/angular-highcharts-declarative-showcase/src/app/';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    for (const file of this.files) {
      this.httpClient.get(this.prefix + file, {responseType: 'text'}).subscribe(
        content => {
          this.fileContents = { ...this.fileContents, ...{ [file]: content } };
        },

        err => {
          this.fileContents = { ...this.fileContents, ...{ [file]: 'No code' } };
        }
      );
    }
  }
}
