import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getImgURL(): string {
    return 'https://metromidsayap-water.gov.ph/wp-content/uploads/2016/11/Header-Background.jpg';
  }
}
