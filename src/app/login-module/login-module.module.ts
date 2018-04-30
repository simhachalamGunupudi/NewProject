import {
  NgModule
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModuleComponent} from './login-module.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import {SharedModuleService} from '../shared-module/shared-module.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  providers: [SharedModuleService],
  exports: [LoginModuleComponent],
  declarations: [LoginModuleComponent]
})
export class LoginModuleModule {
  constructor() {

  }
}
