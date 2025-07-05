import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogueComponent } from './custom-dialogue-component';

describe('CustomDialogueComponent', () => {
  let component: CustomDialogueComponent;
  let fixture: ComponentFixture<CustomDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDialogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
