import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LanguageListingRoutingModule} from './language-listing-routing.module';
import {LanguageListingComponent} from './language-listing.component';
import {LoginModuleModule} from '../login-module/login-module.module';
import {HighlightDirective} from './highlight.directive';
@NgModule({
  imports: [
    CommonModule,
    LanguageListingRoutingModule,
    LoginModuleModule
  ],
  exports: [LanguageListingComponent],
  declarations: [LanguageListingComponent, HighlightDirective]
})
export class LanguageListingModule {
}
