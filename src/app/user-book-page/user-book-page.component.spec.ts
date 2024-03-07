import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookPageComponent } from './user-book-page.component';

describe('UserBookPageComponent', () => {
  let component: UserBookPageComponent;
  let fixture: ComponentFixture<UserBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookPageComponent]
    });
    fixture = TestBed.createComponent(UserBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
