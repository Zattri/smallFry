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
  public hidden = true;
  public selectedBait = 1;

  public fish = null;

  public col1 = 'black';
  public col2 = 'black';
  public animation = null;
  public caughtText = null;
  public fishCount = 0;

  private waitTime = 30;
  private caughtList = [];

  castLine() {
    this.caughtText = null;
    this.casted = true;
    this.hidden = true;
    this.startFishing();
  }

  catchFish() {
    this.caughtText = this.fish.text;
    this.fishCount = this.caughtList.length;
    this.col1 = this.fish.colour1;
    this.col2 = this.fish.colour2;
    this.fish = null;
  }

  startFishing() {
    const timer = Math.floor(Math.random() * this.waitTime * 1000);
    console.log(timer / 1000 + ' seconds'); // remove once dev done
    setTimeout(() => {
      this.fish = this.fishGenerator.getFishType(this.selectedBait);
      this.col1 = 'black';
      this.col2 = 'black';
      this.casted = false;
      this.animation = 'bounceInUp animated';
      this.hidden = false;
    }, timer);
    this.caughtList.push(this.fish);
  }

}
