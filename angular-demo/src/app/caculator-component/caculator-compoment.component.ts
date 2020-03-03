import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator-compoment',
  templateUrl: './caculator-compoment.component.html',
  styleUrls: ['./caculator-compoment.component.css']
})
export class CaculatorCompomentComponent implements OnInit {

  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
