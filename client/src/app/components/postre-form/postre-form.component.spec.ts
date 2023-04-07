import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreFormComponent } from './postre-form.component';

describe('PostreFormComponent', () => {
  let component: PostreFormComponent;
  let fixture: ComponentFixture<PostreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
