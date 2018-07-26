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

  getFishType(baitType: any) {
    const fish = <any>{};

    fish.type = this.fishType[baitType];
    fish.rarity = this.fishRarity[Math.floor(Math.random() * 10)];
    fish.colour1 = this.fishColours[this.randomFishColour()];
    fish.colour2 = this.fishColours[this.randomFishColour()];
    while (fish.colour2 === fish.colour1) { fish.colour2 = this.fishColours[this.randomFishColour()]; }
    fish.text = fish.rarity + ' ' + fish.type;
    return fish;
  }

  randomFishColour() {
    return Math.floor(Math.random() * this.fishColours.length);
  }
}

