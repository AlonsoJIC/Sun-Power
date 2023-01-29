import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conp1Component } from './conp1.component';

describe('Conp1Component', () => {
  let component: Conp1Component;
  let fixture: ComponentFixture<Conp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
