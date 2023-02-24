import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVestiComponent } from './delete-vesti.component';

describe('DeleteVestiComponent', () => {
  let component: DeleteVestiComponent;
  let fixture: ComponentFixture<DeleteVestiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVestiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
