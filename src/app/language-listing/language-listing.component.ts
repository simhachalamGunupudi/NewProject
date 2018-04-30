import {
  Component,
  OnInit,
  ViewChild,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-language-listing',
  templateUrl: './language-listing.component.html',
  styleUrls: ['./language-listing.component.css']
})
export class LanguageListingComponent implements OnInit, AfterContentInit {
  superData: any = [{name: 'kamala'}, {name: 'amrutha'}, {name: 'sanjana'}];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
