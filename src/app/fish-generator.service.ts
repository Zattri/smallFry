import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FishGeneratorService {

  constructor() { }

  private fishType = [
    'Herring',
    'Trout',
    'Salmon',
    'Pike',
    'Sardine',
    'Barracuda',
    'Shark',
    'Carp',
    'Guppy',
    'Megaladon'
  ];

  private fishRarity = [
    'Petty',
    'Common',
    'Uncommon',
    'Rare',
    'Exotic',
    'Epic',
    'Mythic',
    'Legendary',
    'Golden',
    'Uncatchable'
  ];

  private fishColours = [
    'red',
    'yellow',
    'green',
    'blue',
    'purple',
    'orange'
  ];

  getFish(baitType: any) {
    // TODO: interface?
    const fish = {
      type: this.fishType[baitType],
      rarity: this.fishRarity[Math.floor(Math.random() * 10)],
      colors: [this.fishColours[this.randomColor()], this.fishColours[this.randomColor()]],
      name: '',
      caught: false
    };

    while (fish.colors[0] === fish.colors[1]) {
      fish.colors[1] = this.fishColours[this.randomColor()];
    }

    fish.name = fish.rarity + ' ' + fish.type;

    return fish;
  }

  randomColor() {
    return Math.floor(Math.random() * this.fishColours.length);
  }
}

