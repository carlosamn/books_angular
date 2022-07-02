import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenetecListComponent } from './genetec-list.component';

describe('GenetecListComponent', () => {
  let component: GenetecListComponent;
  let fixture: ComponentFixture<GenetecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenetecListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenetecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
