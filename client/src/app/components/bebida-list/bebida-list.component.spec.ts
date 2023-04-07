import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaListComponent } from './bebida-list.component';

describe('BebidaListComponent', () => {
  let component: BebidaListComponent;
  let fixture: ComponentFixture<BebidaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
