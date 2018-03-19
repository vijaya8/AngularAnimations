import { Component, OnInit } from '@angular/core';
import {trigger, style, state, animate, transition} from '@angular/animations';
import { buttonHoverAnimation, imageAnimation } from './practise-animations';

@Component({
  selector: 'app-practiseanimation',
  templateUrl: './practiseanimation.component.html',
  styleUrls: ['./practiseanimation.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('active', style({
        transform: 'scale(1.1)',
        background:'#ededed',
      })),
      state('inactive',style({
        background: 'green',
        transform: 'scale(1)'
      })),
      transition('inactive => active', [
        style({
          background:'#ccc'
        }),
        animate('1000ms', style({
          opacity:'0.2'
        }))
      ]),
      transition('active => inactive', animate('500ms'))
    ]),
    buttonHoverAnimation,
    imageAnimation
  ]
})
export class PractiseanimationComponent implements OnInit {
  state: string = 'inactive';
  hoverText: string = 'inactive';
  constructor() { }

  buttonState(){
    console.log('this.state in 1st', this.state);
    this.state = this.state === 'active'? 'inactive': 'active';
    console.log('this.state in 2nd', this.state);
  }

  get stateName() {
    console.log('this.hoverText in 3rd', this.hoverText);
    return this.hoverText === 'active' ? 'active': 'inactive';
  }

  hoverState() {
    console.log('this.hoverText in 1st', this.hoverText);
     this.hoverText = this.hoverText === 'inactive' ? 'active': 'inactive';
     console.log('this.hoverText in 2nd', this.hoverText);
  }

  ngOnInit() {
  }

}
