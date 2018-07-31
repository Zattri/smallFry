import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sf-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  @Input() fish;
  public uncaught = ['fish', 'centreMiddle', 'animated', 'bounceInUp'];
  public caught = ['fish', 'centreMiddle', 'animated', 'shake'];


  public fishColors = ['black', 'black'];

  constructor() { }

  ngOnInit() {
  }

}
