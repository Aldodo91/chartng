import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTableComponent } from './prime-table.component';

describe('SirioTableComponent', () => {
  let component: PrimeTableComponent;
  let fixture: ComponentFixture<PrimeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeTableComponent],
    });
    fixture = TestBed.createComponent(PrimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
