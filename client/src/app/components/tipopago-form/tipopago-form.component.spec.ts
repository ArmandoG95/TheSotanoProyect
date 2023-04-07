import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopagoFormComponent } from './tipopago-form.component';

describe('TipopagoFormComponent', () => {
  let component: TipopagoFormComponent;
  let fixture: ComponentFixture<TipopagoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipopagoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipopagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
