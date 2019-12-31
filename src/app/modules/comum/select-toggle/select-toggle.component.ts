import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-toggle',
  templateUrl: './select-toggle.component.html',
  styleUrls: ['./select-toggle.component.scss']
})
export class SelectToggleComponent implements OnInit {

  @Input() items: any;
  matButtonToggleGroup: any;
  itemSelected: any;

  constructor() { }

  changeModelValue(param) {
    this.items.map((item) => {
      item.selected = item.value === param.value ? true : false;
    });
  }

  ngOnInit() {
    this.itemSelected = this.items.filter((item) => {
      return item.selected;
    });

    this.itemSelected = this.itemSelected[0].value;
  }

}
