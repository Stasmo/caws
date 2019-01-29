import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSequencerComponent } from './step-sequencer.component';

describe('StepSequencerComponent', () => {
  let component: StepSequencerComponent;
  let fixture: ComponentFixture<StepSequencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSequencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSequencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
