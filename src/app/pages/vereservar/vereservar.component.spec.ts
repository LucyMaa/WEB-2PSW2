import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereservarComponent } from './vereservar.component';

describe('VereservarComponent', () => {
  let component: VereservarComponent;
  let fixture: ComponentFixture<VereservarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereservarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
