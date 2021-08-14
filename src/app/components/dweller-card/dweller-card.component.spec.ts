import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellerCardComponent } from './dweller-card.component';

describe('DwellerCardComponent', () => {
  let component: DwellerCardComponent;
  let fixture: ComponentFixture<DwellerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwellerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
