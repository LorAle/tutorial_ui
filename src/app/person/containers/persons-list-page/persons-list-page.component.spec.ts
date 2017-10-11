import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListPageComponent } from './persons-list-page.component';

describe('PersonsListPageComponent', () => {
  let component: PersonsListPageComponent;
  let fixture: ComponentFixture<PersonsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
