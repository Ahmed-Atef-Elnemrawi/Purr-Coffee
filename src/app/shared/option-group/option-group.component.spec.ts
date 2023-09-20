import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renderer2 } from '@angular/core';
import { OptionGroupComponent } from './option-group.component';

describe('ButtonGroupComponent', () => {
  let component: OptionGroupComponent;
  let fixture: ComponentFixture<OptionGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OptionGroupComponent],
      providers: [Renderer2],
    });
    TestBed.inject(Renderer2);
    fixture = TestBed.createComponent(OptionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a "ButtonGroupComponent" instance', () => {
    expect(component).toBeTruthy();
  });
});
