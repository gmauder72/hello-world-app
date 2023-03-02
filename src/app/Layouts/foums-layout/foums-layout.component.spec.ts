import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoumsLayoutComponent } from './foums-layout.component';

describe('FoumsLayoutComponent', () => {
  let component: FoumsLayoutComponent;
  let fixture: ComponentFixture<FoumsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoumsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoumsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
