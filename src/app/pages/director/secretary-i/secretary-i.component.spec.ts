import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryIComponent } from './secretary-i.component';

describe('SecretaryIComponent', () => {
  let component: SecretaryIComponent;
  let fixture: ComponentFixture<SecretaryIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
