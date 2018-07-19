import { Component } from '@angular/core';
import { FishGeneratorService } from './fish-generator.service';

@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fishGenerator: FishGeneratorService) {}

  public baitList = [
    {id: 1, name: 'Lil\' Worm'},
    {id: 2, name: 'Firefly'},
    {id: 3, name: 'Grasshopper'},
    {id: 4, name: 'Maggot'},
    {id: 5, name: 'Shark meat'},
  ];


  public casted = false;
  public selectedBait = 1;

  public fish = null;

  public col1 = 'black';
  public col2 = 'black';


  private caughtList = [];

  castLine() {
    this.casted = true;
    this.startFishing();
  }

  catchFish() {
    this.caughtList.push(this.fish);
    this.col1 = this.fish.colour1;
    this.col2 = this.fish.colour2;
    this.fish = null;
  }

  startFishing() {
    const timer = Math.floor(Math.random() * 32 * 1000);
    console.log(timer); // remove once dev done
    setTimeout(() => {
      this.fish = this.fishGenerator.getFishType(this.selectedBait);
      this.col1 = 'black';
      this.col2 = 'black';
      this.casted = false;
    }, timer);
  }

}
