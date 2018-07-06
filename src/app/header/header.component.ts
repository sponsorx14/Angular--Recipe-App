import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() select = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(data: string) {
    this.select.emit(data);
  }

}
