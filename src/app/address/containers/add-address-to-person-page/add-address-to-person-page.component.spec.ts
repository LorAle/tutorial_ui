import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressToPersonPageComponent } from './add-address-to-person-page.component';

describe('AddAddressToPersonPageComponent', () => {
  let component: AddAddressToPersonPageComponent;
  let fixture: ComponentFixture<AddAddressToPersonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddressToPersonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressToPersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
