import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVestiComponent } from './add-vesti.component';

describe('AddVestiComponent', () => {
  let component: AddVestiComponent;
  let fixture: ComponentFixture<AddVestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVestiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
