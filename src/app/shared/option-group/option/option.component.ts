import { Component, Host, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionGroupComponent } from '../option-group.component';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #button
      (click)="buttonGroup.toggleValue(value)"
      class=" w-full text-base font-medium border-2 border-gray-300 px-4 py-1.5 rounded-full shrink-0 md:py-3 md:px-6 lg:py-1.5 lg:px-2.5 max-[320px]:text-sm"
      [ngClass]="{ 'bg-btnClr1 text-white font-semibold border-none': buttonGroup.isSelected(value) }"
    >
      <label for="{{ label }}">{{ label }}</label>
      <input
        type="checkbox"
        id="{{ label }}"
        [checked]="buttonGroup.isSelected(value)"
        class="appearance-none"
      />
    </div>
  `,
})
export class OptionComponent {
  @Input({ required: true })
  value!: string;

  @Input({ required: true })
  label!: string;

  constructor(@Host() public buttonGroup: OptionGroupComponent) {}
}
