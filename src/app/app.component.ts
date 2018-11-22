import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(incrementedNumber: number) {
    if (incrementedNumber % 2 == 0) {
      this.evenNumbers.push(incrementedNumber);
    } else {
      this.oddNumbers.push(incrementedNumber);
    }
  }

}
