import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackFormComponent } from './snack-form.component';

describe('SnackFormComponent', () => {
  let component: SnackFormComponent;
  let fixture: ComponentFixture<SnackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
