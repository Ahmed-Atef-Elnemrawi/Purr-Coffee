import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class=" h-full px-2 space-x-1 max-sm:space-x-1 flex flex-row place-content-around place-items-center shrink-0 md:space-x-2 lg:space-x-6 lg:px-4">
      <div class="flex space-x-2">
        <div>
          <img
            class=" w-10 h-10 lg:w-12 lg:h-12 block bg-gray-50 shadow-sm rounded-full"
            src="https://source.unsplash.com/ZHvM3XIOHoE/"
            alt=""
          />
        </div>
        <div class=" text-base md:text-lg lg:text-base/snug max-lg:hidden">
          <div class="font-semibold opacity-95">Albert Flores</div>
          <p class="text-slate-500 font-medium">purrcaf@gmail.com</p>
        </div>
      </div>
      <button type="button">
        <svg
        class="inline-block w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0000008e"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
          ></path>
        </svg>
      </button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {}
