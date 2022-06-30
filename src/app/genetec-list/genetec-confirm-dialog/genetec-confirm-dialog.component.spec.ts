import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetecConfirmDialogComponent } from './genetec-confirm-dialog.component';

describe('GenetecConfirmDialogComponent', () => {
  let component: GenetecConfirmDialogComponent;
  let fixture: ComponentFixture<GenetecConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenetecConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenetecConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
