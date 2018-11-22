import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();

  interval: any;
 incrementedNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  counter() {
    this.incrementedNumber ++;
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.incrementedNumber + 1);
      this.incrementedNumber ++;
    }, 1000);
  }

  onGameStop() {
   clearInterval(this.interval);
  }
}
