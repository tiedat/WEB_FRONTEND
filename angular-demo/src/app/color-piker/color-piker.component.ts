import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-piker',
  templateUrl: './color-piker.component.html',
  styleUrls: ['./color-piker.component.css']
})
export class ColorPikerComponent implements OnInit {

  background = '#00E067';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(value) {
    this.background = value;
  }
}
