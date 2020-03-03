import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import NumberFormat = Intl.NumberFormat;
import {NUMBER_TYPE} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
  }

  private intervalId = 0;
  message = '';
  remainingTime: number;

  // tslint:disable-next-line:no-input-rename
  @Input('remaining-time')
  seconds = 60;

  @Output()
  finish = new EventEmitter<boolean>();
  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 60 : v;
      // @ts-ignore
      const vFixed = Number(v);
      this.seconds = isNaN(vFixed) ? 60 : vFixed;
    }
  }

  ngOnInit(): void {
    this.remainingTime = this.seconds;
  }

  ngOnDestroy(): void {
  }

  start() {
    this.intervalId = window.setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.finish.emit(true);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    clearInterval(this.intervalId);
    this.seconds = this.remainingTime = 60;
  }

  onChange(value) {
    this.remainingTime = this.seconds = value;
  }
}
