import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsPageComponent } from './address-details-page.component';

describe('AddressDetailsPageComponent', () => {
  let component: AddressDetailsPageComponent;
  let fixture: ComponentFixture<AddressDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
