import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormButtonComponent } from './contact-form-button.component';

describe('ContactFormButtonComponent', () => {
  let component: ContactFormButtonComponent;
  let fixture: ComponentFixture<ContactFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
