import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerFullDetailsComponent } from './custmer-full-details.component';

describe('CustmerFullDetailsComponent', () => {
  let component: CustmerFullDetailsComponent;
  let fixture: ComponentFixture<CustmerFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmerFullDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmerFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
