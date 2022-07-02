import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetecDialogComponent } from './genetec-dialog.component';

describe('GenetecDialogComponent', () => {
  let component: GenetecDialogComponent;
  let fixture: ComponentFixture<GenetecDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenetecDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenetecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
