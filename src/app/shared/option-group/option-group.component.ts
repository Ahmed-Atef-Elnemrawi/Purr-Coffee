import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  Input,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-option-group',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OptionGroupComponent),
      multi: true,
    },
  ],
  template: `<div
    #group
    class="flex flex-row place-content-center space-x-2 md:space-x-4 lg:space-x-2"
  >
    <ng-content></ng-content>
  </div>`,
})
export class OptionGroupComponent
  implements ControlValueAccessor, AfterViewInit
{
  @ViewChild('group')
  group!: ElementRef<HTMLElement>;

  value: string = 'delivery';

  onChange = (value: string) => {};
  onTouch = () => {};

  constructor(private El: Renderer2) {}

  ngAfterViewInit(): void {}

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  toggleValue(selectedValue: string) {
    if (this.isSelected(selectedValue)) {
      return;
    } else {
      this.value = selectedValue;
    }

    this.onChange(this.value);
    this.onTouch();
  }

  isSelected(valueToCheck: string) {
    return this.value === valueToCheck;
  }
}
