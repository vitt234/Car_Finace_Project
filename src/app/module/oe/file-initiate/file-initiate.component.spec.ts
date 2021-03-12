import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInitiateComponent } from './file-initiate.component';

describe('FileInitiateComponent', () => {
  let component: FileInitiateComponent;
  let fixture: ComponentFixture<FileInitiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInitiateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInitiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
