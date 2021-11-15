import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsAnswerComponent } from './datails-answer.component';

describe('DatailsAnswerComponent', () => {
  let component: DatailsAnswerComponent;
  let fixture: ComponentFixture<DatailsAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
