import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-circles',
  templateUrl: './select-circles.component.html',
  styleUrls: ['./select-circles.component.scss']
})
export class SelectCirclesComponent implements OnInit {

  @Input() items: any;
  @Input() color: any;
  @Output() onchange = new EventEmitter();

  constructor() { }

  changeFunction() {
    this.onchange.emit(null);
  }

  ngOnInit() {
  }

}
