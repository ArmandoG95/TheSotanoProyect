import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreListComponent } from './postre-list.component';

describe('PostreListComponent', () => {
  let component: PostreListComponent;
  let fixture: ComponentFixture<PostreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
