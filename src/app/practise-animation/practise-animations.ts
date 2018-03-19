import{animate,trigger, style, state, transition, keyframes} from '@angular/animations'


export const buttonHoverAnimation = [
    trigger ('hovertext', [
        state('inacitve', style({
            height:'200px' ,width:'300px'
        })),
        state('active', style({
            opacity: '1',background:'skyblue'
        })),
        transition('inactive => active', animate('600ms ease-in')),
        transition('active => inactive', animate('300ms ease-out',style({
            opacity: '0.6', transform: 'scale(1)'
        })))
    ])
];

export const imageAnimation = [
    trigger('photoState', [
        state('move', style({
          transform: 'translateX(-100%)',
        })),
        state('enlarge',   style({
          transform: 'scale(1.5)',
        })),
        state('spin',   style({
          transform: 'rotateY(180deg) rotateZ(90deg)',
        })),
        transition('* => *', animate('500ms ease')),
      ])
]

