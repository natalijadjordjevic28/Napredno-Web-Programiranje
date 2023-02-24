import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtakmiceComponent } from './utakmice.component';

describe('UtakmiceComponent', () => {
  let component: UtakmiceComponent;
  let fixture: ComponentFixture<UtakmiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtakmiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtakmiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
