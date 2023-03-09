import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForumsComponent } from './main-forums.component';

describe('MainForumsComponent', () => {
  let component: MainForumsComponent;
  let fixture: ComponentFixture<MainForumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainForumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
