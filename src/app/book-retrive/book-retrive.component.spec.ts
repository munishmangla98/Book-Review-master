import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRetriveComponent } from './book-retrive.component';

describe('BookRetriveComponent', () => {
  let component: BookRetriveComponent;
  let fixture: ComponentFixture<BookRetriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookRetriveComponent]
    });
    fixture = TestBed.createComponent(BookRetriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
