import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLight = true;
  constructor(private overlayContainer: OverlayContainer) {}
  toggleTheme() {
    this.isLight = !this.isLight;
    if (!this.isLight) {
      window.document.body.classList.add('app-dark');
      this.overlayContainer.getContainerElement().classList.add('app-dark');
    } else {
      window.document.body.classList.remove('app-dark');
      this.overlayContainer.getContainerElement().classList.remove('app-dark');
    }
  }
}
