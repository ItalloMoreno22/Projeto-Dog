import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOGComponent } from './dog.component';

describe('DOGComponent', () => {
  let component: DOGComponent;
  let fixture: ComponentFixture<DOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
