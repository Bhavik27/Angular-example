import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaredComponent } from './stared.component';

describe('StaredComponent', () => {
  let component: StaredComponent;
  let fixture: ComponentFixture<StaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
