import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsInformationComponent } from './dogs-information.component';

describe('DogsInformationComponent', () => {
  let component: DogsInformationComponent;
  let fixture: ComponentFixture<DogsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
