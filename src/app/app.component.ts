import { Component } from '@angular/core';

@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public baitList = [
    {id: 1, name: 'Lil\' Worm'},
    {id: 2, name: 'Firefly'},
    {id: 3, name: 'Grasshopper'},
    {id: 4, name: 'Maggot'},
    {id: 5, name: 'Shark meat'},
  ];

  private fishList = [
    {id: 1, color: 'red'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'green'},
    {id: 4, color: 'yellow'},
    {id: 5, color: 'orange'},
  ];

  public casted = false;
  public selected;

  public fish = null;

  private caughtList = []

  constructor() { }

  castLine() {
    this.casted = true;
    this.startFishing();
  }

  catchFish() {
    this.caughtList.push(this.fish);
    alert(`You've caught ${this.fish.id}`);
    this.fish = null;
  }

  startFishing() {
    const timer = Math.floor(Math.random() * 32 * 1000);
    console.log(timer); // remove once dev done
    setTimeout(() => {
      this.fish = this.fishList[Math.floor(Math.random() * this.fishList.length)];
      this.casted = false;
    }, timer);
  }

}
