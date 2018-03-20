import {animate, trigger, state, style, transition, stagger} from '@angular/animations';
import { query } from '@angular/animations';


export const textAnimation = [
    trigger('anotherText',[
        state('inactive',style({
            opacity: '0.5', transform: 'scale(0)'
        })),
        state('active',style({
            opacity: '1', transform: 'scale(1)',background:'turquoise', height: '200px',
            width: '200px'
        })),
        transition('active => inactive', animate('1000ms')),
        transition('void => active', animate('1000ms', style({
            background:'#fdda8d', height: '200px',
            width: '200px'
        })))
    ])
];

export const imageTransition = [
    trigger('imgAnimation',[
        transition('* => *', [
            query('img', style({ transform: 'translateX(-100%)'})),
            query('img',
            stagger('500ms', [
              animate('1000ms', style({ transform: 'translateX(0)'}))
          ]))
        ])
    ])
];