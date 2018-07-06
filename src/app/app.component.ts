import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  select: string = 'recipe';
  constructor() {
  }
  onNavigate(event) {
    this.select = event;
  }

}
