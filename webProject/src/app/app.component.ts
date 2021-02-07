import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router) {
  }

  getImgURL(): string {
    return 'https://metromidsayap-water.gov.ph/wp-content/uploads/2016/11/Header-Background.jpg';
  }
  navigate(url: string): void {
    this.router.navigate([url]);
  }
}

