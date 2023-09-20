import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';
import { OptionComponent } from './option.component';
import { OptionGroupComponent } from '../option-group.component';

describe('CheckboxComponent', () => {
  let component: OptionComponent;
  let fixture: ComponentFixture<OptionComponent>;
  let checkboxGroup: OptionGroupComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionComponent],
    }).compileComponents();

    TestBed.overrideComponent(OptionComponent, {
      set: {
        viewProviders: [OptionGroupComponent],
      },
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create "CheckBoxComponent" instance', () => {
    expect(component).toBeTruthy();
  });
});
