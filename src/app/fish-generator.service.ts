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
    'Medium-rare',
    'Rare',
    'Exotic',
    'Epic',
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

    fish.type = this.fishType[baitType.id];
    fish.rarity = this.fishRarity[Math.floor(Math.random() * 10)];
    fish.colour1 = this.fishColours[Math.floor(Math.random() * this.fishColours.length)];
    fish.colour2 = this.fishColours[Math.floor(Math.random() * this.fishColours.length)];

    return fish;
  }
}

