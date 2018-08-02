import { Component, ViewChild } from '@angular/core';
import { FishGeneratorService } from './fish-generator.service';
import { MatSidenav } from '../../node_modules/@angular/material/sidenav';

@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

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

  public fish;

  public caughtText = null;
  public fishCount = 0;

  private minWaitTime = 3;
  private maxWaitTime = 5;
  private caughtList = [];

  castLine() {
    this.caughtText = null;
    this.casted = true;
    this.hidden = true;
    this.startFishing();
  }

  catchFish() {
    this.caughtText = this.fish.name;
    this.fishCount = this.caughtList.length;
    this.fish.caught = true;
  }

  startFishing() {
    this.fish = null;

    const timer = Math.floor(Math.random() * ((this.maxWaitTime - this.minWaitTime) * 1000)) + (this.minWaitTime * 1000);
    console.log(timer / 1000 + ' seconds'); // remove once dev done
    setTimeout(() => {
      this.fish = this.fishGenerator.getFish(this.selectedBait);
      this.casted = false;
    }, timer);
    this.caughtList.push(this.fish);
  }

}
