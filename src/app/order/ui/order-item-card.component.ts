import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Item } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'order-item-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="w-full h-fit">
    <div class="divide-y">
      <div
        class="w-full flex px-2 py-4 md:py-10 flex-row lg:py-3 lg:space-x-5 "
      >
        <img
          [src]="item.imageSrc"
          class="w-28 h-28 md:w-36 md:h-40 lg:w-20 lg:h-20 bg-slate-400 rounded-md"
        />
        <!-- item details -->
        <div class="flex flex-col place-content-around grow space-y-3">
          <!-- title -->

            <div
              class="flex flex-col space-y-0 place-self-center lg:place-self-start"
            >
              <p class="text-lg md:text-xl lg:text-sm font-semibold -tracking-wide">
                {{ item.name | lowercase }}
              </p>
              <p class="text-sm md:text-lg lg:text-sm font-medium opacity-40 tracking-wide">
                {{ item.size }}
              </p>
            </div>
            <!-- price & quantity-->
            <div
              class="flex flex-row place-self-center space-x-4 lg:place-self-start"
            >
              <!-- price -->
              <p class="text-lg md:text-xl lg:text-sm font-medium">
                {{ item.totalPrice | currency }}
              </p>
              <!-- quantity -->
              <div class="flex flex-row space-x-2 place-items-center">
                <button
                  class="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5"
                  (click)="decrement()"
                >
                  <svg
                    stroke="#1C274C"
                    stroke-width="1"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle opacity="0.3" cx="12" cy="12" r="10"></circle>
                    <path d="M15 12H9"></path>
                  </svg>
                </button>
                <p class="text-lg md:text-xl lg:text-base font-medium">
                  {{ item.quantity }}
                </p>
                <button
                  class="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5"
                  (click)="increment()"
                >
                  <svg
                    stroke="#1C274C"
                    stroke-width="1"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle opacity="0.3" cx="12" cy="12" r="10"></circle>
                    <path
                      d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>


        <button
          type="button"
          (click)="delete()"
          class="h-fit w-fit group place-self-center"
        >
          <svg
            class="group-hover:fill-btnClr0"
            viewBox="0 0 24 24"
            width="40px"
            height="30px"
            fill="none"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#1C274C"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0305 8.96966C11.7376 8.67677 11.2628 8.67677 10.9699 8.96966C10.677 9.26255 10.677 9.73743 10.9699 10.0303L11.9395 11L10.9699 11.9697C10.677 12.2626 10.677 12.7374 10.9699 13.0303C11.2628 13.3232 11.7376 13.3232 12.0305 13.0303L13.0002 12.0607L13.9699 13.0303C14.2628 13.3232 14.7376 13.3232 15.0305 13.0303C15.3234 12.7374 15.3234 12.2626 15.0305 11.9697L14.0609 11L15.0305 10.0303C15.3234 9.73743 15.3234 9.26255 15.0305 8.96966C14.7376 8.67677 14.2628 8.67677 13.9699 8.96966L13.0002 9.93933L12.0305 8.96966Z"
            ></path>
            <path
              d="M1.29266 2.75123C1.43005 2.36047 1.8582 2.15506 2.24896 2.29245L2.55036 2.39841C3.16689 2.61514 3.69052 2.79922 4.10261 3.00142C4.54324 3.21762 4.92109 3.48396 5.20527 3.89982C5.48725 4.31246 5.60367 4.76518 5.6574 5.26156C5.66124 5.29709 5.6648 5.33324 5.66809 5.36999L17.1203 5.36999C17.9389 5.36998 18.7735 5.36997 19.4606 5.44677C19.8103 5.48587 20.1569 5.54817 20.4634 5.65586C20.7639 5.76144 21.0942 5.93435 21.3292 6.23977C21.711 6.73616 21.7777 7.31417 21.7416 7.90037C21.7071 8.45848 21.5686 9.15237 21.4039 9.97726L21.3935 10.0295L21.3925 10.0341L20.8836 12.5034C20.7339 13.2298 20.6079 13.841 20.4455 14.3232C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1227 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2599 4.20828 11.2125 4.20828 9.75999V7.03835C4.20828 6.2984 4.20726 5.80319 4.16611 5.42298C4.12678 5.05963 4.05708 4.87821 3.96682 4.74612C3.87876 4.61726 3.74509 4.49683 3.44186 4.34805C3.11902 4.18964 2.68026 4.03409 2.01266 3.79937L1.75145 3.70754C1.36068 3.57015 1.15527 3.142 1.29266 2.75123ZM5.70828 6.86999L5.70828 9.75999C5.70828 11.249 5.72628 12.1578 5.83744 12.8069C5.93933 13.4018 6.11202 13.7325 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4593 19.2623 12.9389 19.4237 12.1561L19.9225 9.73594L19.9229 9.73372C20.1005 8.84379 20.217 8.25153 20.2444 7.80796C20.2704 7.38651 20.2043 7.2393 20.1429 7.1579C20.1367 7.15262 20.0931 7.11568 19.9661 7.07104C19.8107 7.01642 19.5895 6.97052 19.2939 6.93748C18.6991 6.87099 17.9454 6.86999 17.089 6.86999H5.70828Z"
            ></path>
            <path
              d="M5.2502 19.5C5.2502 20.7426 6.25756 21.75 7.5002 21.75C8.74285 21.75 9.7502 20.7426 9.7502 19.5C9.7502 18.2573 8.74285 17.25 7.5002 17.25C6.25756 17.25 5.2502 18.2573 5.2502 19.5ZM7.5002 20.25C7.08599 20.25 6.7502 19.9142 6.7502 19.5C6.7502 19.0858 7.08599 18.75 7.5002 18.75C7.91442 18.75 8.2502 19.0858 8.2502 19.5C8.2502 19.9142 7.91442 20.25 7.5002 20.25Z"
            ></path>
            <path
              d="M14.2502 19.5001C14.2502 20.7427 15.2576 21.7501 16.5002 21.7501C17.7428 21.7501 18.7502 20.7427 18.7502 19.5001C18.7502 18.2574 17.7428 17.2501 16.5002 17.2501C15.2576 17.2501 14.2502 18.2574 14.2502 19.5001ZM16.5002 20.2501C16.086 20.2501 15.7502 19.9143 15.7502 19.5001C15.7502 19.0859 16.086 18.7501 16.5002 18.7501C16.9144 18.7501 17.2502 19.0859 17.2502 19.5001C17.2502 19.9143 16.9144 20.2501 16.5002 20.2501Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>`,
})
export class OrderItemCard {
  @Input({ required: true })
  item!: Item;

  @Output()
  quantityChanged = new EventEmitter<{ itemId: number; quantity: number }>();

  @Output()
  itemDeleted = new EventEmitter<{ itemId: number }>();

  constructor() {}

  increment() {
    this.quantityChanged.emit({
      itemId: this.item.id,
      quantity: this.item.quantity + 1,
    });
  }

  decrement() {
    if (this.item.quantity === 0) this.item.quantity = 1;

    this.quantityChanged.emit({
      itemId: this.item.id,
      quantity: this.item.quantity - 1,
    });
  }

  delete() {
    this.itemDeleted.emit({ itemId: this.item.id });
  }
}
