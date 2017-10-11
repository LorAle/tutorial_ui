import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesListPageComponent } from './addresses-list-page.component';

describe('AddressesListPageComponent', () => {
  let component: AddressesListPageComponent;
  let fixture: ComponentFixture<AddressesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
