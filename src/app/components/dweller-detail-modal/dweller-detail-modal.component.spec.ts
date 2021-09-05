import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellerDetailModalComponent } from './dweller-detail-modal.component';

describe('DwellerDetailModalComponent', () => {
  let component: DwellerDetailModalComponent;
  let fixture: ComponentFixture<DwellerDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwellerDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellerDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
