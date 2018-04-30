import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const showCss = ((window || <any>{}).innerWidth < 640)
  ? {
    left: '0%'
  }
  : {
    transform: 'translate(-100%)'
  };

const hideCss = ((window || <any>{}).innerWidth < 640)
  ? {
    left: '100%'
  }
  : {
    transform: 'translateX(0%)'
  };

export const burgerMenuAnimation = [
  trigger('burgerMenuAnimation', [
    state('show', style(showCss)),
    state('hide', style(hideCss)),
    transition('hide => show', animate('200ms ease-in-out')),
    transition('show => hide', animate('200ms ease-in-out'))
  ])
];

export const burgerHide = [
  trigger('burgerHide', [
    state('hide', style({
      opacity: '1'
    })),
    state('show', style({
      opacity: '0'
    })),
    transition('show <=> hide', animate('200ms ease-in-out'))
  ])
];

export const colorAnimation = [
  trigger('colorAnimation', [
    state('inactive', style({
      color: '#ffffff'
    })),
    state('active', style({
      color: 'red'
    })),
    transition('inactive <=> active', animate('200ms ease-in-out'))
  ])
];

