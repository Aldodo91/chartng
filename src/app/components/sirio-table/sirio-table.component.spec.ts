import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirioTableComponent } from './sirio-table.component';

describe('SirioTableComponent', () => {
  let component: SirioTableComponent;
  let fixture: ComponentFixture<SirioTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SirioTableComponent]
    });
    fixture = TestBed.createComponent(SirioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
