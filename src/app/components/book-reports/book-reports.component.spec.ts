import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReportsComponent } from './book-reports.component';

describe('BookReportsComponent', () => {
  let component: BookReportsComponent;
  let fixture: ComponentFixture<BookReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
