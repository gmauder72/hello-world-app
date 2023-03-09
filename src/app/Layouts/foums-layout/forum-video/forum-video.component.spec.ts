import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumVideoComponent } from './forum-video.component';

describe('ForumVideoComponent', () => {
  let component: ForumVideoComponent;
  let fixture: ComponentFixture<ForumVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
