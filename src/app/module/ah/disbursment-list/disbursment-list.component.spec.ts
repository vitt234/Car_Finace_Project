import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursmentListComponent } from './disbursment-list.component';

describe('DisbursmentListComponent', () => {
  let component: DisbursmentListComponent;
  let fixture: ComponentFixture<DisbursmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisbursmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
