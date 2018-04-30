import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: '/sim', pathMatch: 'full'},
  {
    path: 'sim', loadChildren: 'app/language-listing/language-listing.module#LanguageListingModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
