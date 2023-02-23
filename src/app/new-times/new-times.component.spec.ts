import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimesComponent } from './new-times.component';

describe('NewTimesComponent', () => {
  let component: NewTimesComponent;
  let fixture: ComponentFixture<NewTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
