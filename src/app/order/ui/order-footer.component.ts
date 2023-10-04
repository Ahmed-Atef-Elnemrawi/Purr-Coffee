import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'order-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div
    class=" w-full h-full flex flex-col space-y-5 md:space-y-2 lg:space-y-3 xl:space-y-5"
  >
    <div class="space-y-1 lg:space-y-4 xl:space-6">
      <!-- items total -->
      <div class="flex place-content-between">
        <p
          class="text-lg md:text-base lg:text-base lg:font-semibold font-medium opacity-40"
        >
          Items
        </p>
        <p
          class="text-lg md:text-base lg:text-base lg:font-semibold font-medium"
        >
          {{ total | currency }}
        </p>
      </div>
      <!-- discounts -->
      <div class="flex place-content-between">
        <p
          class="text-lg md:text-base lg:text-base lg:font-semibold font-medium opacity-40"
        >
          Discounts
        </p>
        <p
          class="text-lg md:text-base lg:text-base lg:font-semibold font-medium"
        >
          -{{ discount | currency }}
        </p>
      </div>
    </div>
    <span class="h-px border"></span>
    <div class="flex place-content-between">
      <!-- total after discounts -->
      <p
        class="text-lg md:text-base lg:text-base lg:font-semibold font-medium opacity-40"
      >
        Total
      </p>
      <p
        class="text-lg md:text-base lg:text-base lg:font-semibold font-medium text-btnClr0"
      >
        {{ totalAfterDiscount | currency }}
      </p>
    </div>
    <button
      class="text-lg py-1.5 md:py-2 font-semibold rounded-full bg-btnClr0 text-white md:text-base lg:text-base  md:w-4/5 md:place-self-center"
      (click)="placeOrder()"
    >
      Place an order
    </button>
  </div>`,
})
export class OrderFooter {
  @Input({ required: true })
  total!: number;

  @Input({ required: true })
  discount!: number;

  @Input({ required: true })
  totalAfterDiscount!: number;

  @Output()
  orderPlaced = new EventEmitter();

  constructor() {}

  placeOrder() {
    this.orderPlaced.emit();
  }
}
