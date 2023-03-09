import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterForumsComponent } from './supporter-forums.component';

describe('SupporterForumsComponent', () => {
  let component: SupporterForumsComponent;
  let fixture: ComponentFixture<SupporterForumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupporterForumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupporterForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
