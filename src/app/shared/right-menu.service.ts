import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

export type MenuState = 'hide' | 'show';

@Injectable()
/**
 * This service is subscribed to by the right slider menu in app.compnent. When another component needs the
 * menu open or closed, it should inject this service and call toggleMenu with an appropriate [[MenuState]].
 */
export class RightMenuService {

  private _menuToggle$ = new Subject<MenuState>();

  get menuToggle$(): Observable<MenuState> {
    return this._menuToggle$.asObservable();
  }

  constructor() {
  }

  toggleMenu(state: MenuState) {
    this._menuToggle$.next(state);
  }
}
