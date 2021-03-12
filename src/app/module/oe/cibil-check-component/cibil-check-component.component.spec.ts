import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilCheckComponentComponent } from './cibil-check-component.component';

describe('CibilCheckComponentComponent', () => {
  let component: CibilCheckComponentComponent;
  let fixture: ComponentFixture<CibilCheckComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilCheckComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilCheckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
