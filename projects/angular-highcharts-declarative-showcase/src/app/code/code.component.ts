import {AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

declare var Prism: any;
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html'
})
export class CodeComponent implements OnInit, AfterViewChecked {
  @Input()
  files: string[] = [];

  fileContents = {};

  prefix =
    // tslint:disable-next-line:max-line-length
    'https://raw.githubusercontent.com/antonsimola/angular-highcharts-declarative/master/projects/angular-highcharts-declarative-showcase/src/app/';

  @ViewChild('code', { static: false }) codeElement: ElementRef;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    for (const file of this.files) {
      this.httpClient.get(this.prefix + file, { responseType: 'text' }).subscribe(
        content => {
          this.fileContents = { ...this.fileContents, ...{ [file]: content } };
        },

        err => {
          this.fileContents = { ...this.fileContents, ...{ [file]: 'No code' } };
        }
      );
    }
  }

  ngAfterViewChecked() {
    Prism.highlightAll();
  }
}
