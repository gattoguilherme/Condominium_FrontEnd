import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellerDetailComponent } from './dweller-detail.component';

describe('DwellerDetailComponent', () => {
  let component: DwellerDetailComponent;
  let fixture: ComponentFixture<DwellerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwellerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
