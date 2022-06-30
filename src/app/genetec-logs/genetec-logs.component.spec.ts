import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetecLogsComponent } from './genetec-logs.component';

describe('GenetecLogsComponent', () => {
  let component: GenetecLogsComponent;
  let fixture: ComponentFixture<GenetecLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenetecLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenetecLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
