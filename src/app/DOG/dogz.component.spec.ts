import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogzComponent } from './dogz.component';

describe('DogzComponent', () => {
  let component: DogzComponent;
  let fixture: ComponentFixture<DogzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
