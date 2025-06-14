import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyPage } from './add-money-page';

describe('AddMoneyPage', () => {
  let component: AddMoneyPage;
  let fixture: ComponentFixture<AddMoneyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoneyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
