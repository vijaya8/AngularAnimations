import { Component, OnInit } from '@angular/core';
import { textAnimation, imageTransition } from './another-animation';

@Component({
  selector: 'app-another-animation',
  templateUrl: './another-animation.component.html',
  styleUrls: ['./another-animation.component.css'],
  animations: [textAnimation, imageTransition]
})
export class AnotherAnimationComponent implements OnInit {
  textStatus: string = 'inactive';
  photos: any[];
  constructor() { }


  ngOnInit() {
    this.textStatus = this.textStatus === 'active' ? 'inactive' : 'active';
    this.photos = ['../assets/images/teddy2.jpg','../assets/images/teddy3.jpg',
                    '../assets/images/teddy4.jpg']
  }

}
