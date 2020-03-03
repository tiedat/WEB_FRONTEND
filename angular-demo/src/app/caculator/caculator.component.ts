import {Component, OnInit} from '@angular/core';
import {angularMath} from 'angular-ts-math';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  result: number;
  firstNumber: number;
  secondNumber: number;
  operator = '+';

  onFirstNumberChange(value) {
    // @ts-ignore
    this.firstNumber = Number(value);
  }

  onSecondNumberChange(value) {
    // @ts-ignore
    this.secondNumber = Number(value);
  }

  onOperatorChange(value) {
    this.operator = value;
  }

  caculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
