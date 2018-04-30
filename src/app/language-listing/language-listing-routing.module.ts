import {NgModule} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {LanguageListingComponent} from './language-listing.component';
const routes: Routes = [{path: '', component: LanguageListingComponent}, {
  path: 'language',
  component: LanguageListingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageListingRoutingModule {
}
