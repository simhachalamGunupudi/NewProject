import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const burgerTwitchAnimation1 = [
  trigger('burgerTwitchAnimation1', [
    state('active', style({
      width: '21px'
    })),
    state('inactive', style({
      width: '12px'
    })),
    transition('inactive => active', animate('300ms')),
    transition('active => inactive', animate('200ms'))
  ])
];

export const burgerTwitchAnimation2 = [
  trigger('burgerTwitchAnimation2', [
    state('active', style({
      width: '21px'
    })),
    state('inactive', style({
      width: '18px'
    })),
    transition('inactive => active', animate('300ms')),
    transition('active => inactive', animate('200ms'))
  ])
];
