import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GQuestionComponent } from './gquestion.component';

describe('GQuestionComponent', () => {
  let component: GQuestionComponent;
  let fixture: ComponentFixture<GQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
