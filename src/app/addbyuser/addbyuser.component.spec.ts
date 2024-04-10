import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbyuserComponent } from './addbyuser.component';

describe('AddbyuserComponent', () => {
  let component: AddbyuserComponent;
  let fixture: ComponentFixture<AddbyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbyuserComponent]
    });
    fixture = TestBed.createComponent(AddbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
