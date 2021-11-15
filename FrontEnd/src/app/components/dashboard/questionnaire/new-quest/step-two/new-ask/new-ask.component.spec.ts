import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAskComponent } from './new-ask.component';

describe('NewAskComponent', () => {
  let component: NewAskComponent;
  let fixture: ComponentFixture<NewAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
