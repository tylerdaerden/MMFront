import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsComponent } from './validators.component';

describe('ValidatorsComponent', () => {
  let component: ValidatorsComponent;
  let fixture: ComponentFixture<ValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatorsComponent]
    });
    fixture = TestBed.createComponent(ValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
