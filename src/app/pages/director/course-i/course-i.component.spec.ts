import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIComponent } from './course-i.component';

describe('CourseIComponent', () => {
  let component: CourseIComponent;
  let fixture: ComponentFixture<CourseIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
