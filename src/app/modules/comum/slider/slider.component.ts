import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  @Input() inputs: any;
  @Input() minValue: number;
  @Input() maxValue: number;

  options: Options = {
    floor: 0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {
      if (this.inputs) {
        return '';
      }

      switch (label) {
        case LabelType.Low:
          return 'R$' + value;
        case LabelType.High:
          return 'R$' + value;
        default:
          return 'R$' + value;
      }
    }
  };

  constructor() { }

  ngOnInit() {
    this.options.floor = this.minValue;
    this.options.ceil = this.maxValue;
  }
}
