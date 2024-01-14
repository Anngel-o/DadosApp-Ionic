import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dice = '';
  img1 = '../../assets/img/dice3.png';
  img2 = '../../assets/img/dice5.png';

  constructor() {}

  launch(){
    const numberDice1 = Math.floor(Math.random() * 6) + 1;
    const numberDice2 = Math.floor(Math.random() * 6) + 1;

    this.img1 = '../../assets/img/dice' + numberDice1 + '.png';
    this.img2 = '../../assets/img/dice' + numberDice2 + '.png';
  }
}
