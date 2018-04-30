import {
  Component,
  OnInit
} from '@angular/core';
import {SharedModel} from './shared-model';
import {
  burgerHide,
  burgerMenuAnimation,
  colorAnimation
} from '../shared/hamburger-menu';
import {
  burgerTwitchAnimation1,
  burgerTwitchAnimation2
} from '../shared/burger-twitch';
import {
  MenuState,
  RightMenuService
} from '../shared/right-menu.service';

@Component({
  selector: 'app-shared-module',
  templateUrl: './shared-module.component.html',
  styleUrls: ['./shared-module.component.scss'],
  animations: [
    burgerHide,
    burgerMenuAnimation,
    colorAnimation,
    burgerTwitchAnimation1,
    burgerTwitchAnimation2
  ]
})
export class SharedModuleComponent implements OnInit {
  name: string;
  currentPassword: string;
  showMenu: MenuState = 'hide';
  twitchBurger = 'inactive';

  constructor() {
  }

  ngOnInit() {
    const obj: SharedModel = SharedModel.fromJson({firstName: '', currentPassword: ''});
    console.log(obj);
    this.name = obj.firstName;
    this.currentPassword = obj.password;
  }

  onBurgerMouseOver(isOver) {
    this.twitchBurger = isOver ? 'active' : 'inactive';
  }

  openMenu() {
    this.showMenu = 'show';
  }

}
