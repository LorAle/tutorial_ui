import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonPageComponent } from './add-person-page.component';

describe('AddPersonPageComponent', () => {
  let component: AddPersonPageComponent;
  let fixture: ComponentFixture<AddPersonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
