import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSheetComponent } from './face-sheet.component';

describe('FaceSheetComponent', () => {
  let component: FaceSheetComponent;
  let fixture: ComponentFixture<FaceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
