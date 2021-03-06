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
          transform: 'scale(0.5)',
        })),
        state('spin',   style({
          transform: 'rotateY(180deg)',
        })),
        transition('*=> *', animate('1000ms ease')),
      ])
]
export const keyAnimation = [
    trigger('photoStateKey', [
        state('move', style({
          transform: 'translateX(-100%)',
        })),
        state('enlarge',   style({
          transform: 'scale(0.5)',
        })),
        state('spin',   style({
          transform: 'rotateY(180deg)',
        })),
    transition('* => move',
    animate('2000ms', keyframes([
      style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
      style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
      style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
      style({transform: 'translateX(-100%)',                  offset: 1.0})
    ])
    ))
])
]


