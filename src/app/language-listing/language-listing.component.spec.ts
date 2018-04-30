import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {LanguageListingComponent} from './language-listing.component';

describe('LanguageListingComponent', () => {
  let component: LanguageListingComponent;
  let fixture: ComponentFixture<LanguageListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageListingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
