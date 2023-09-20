import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex place-content-center max-w-md">
      <form
        class=" h-10 w-full grid grid-flow-col grid-cols-4 rounded-full bg-gray-50 overflow-hidden "
      >
        <input
          type="search"
          class=" h-full outline-none col-span-3 bg-transparent px-4 justify-between text-txtClr1 text-lg tracking-wide capitalize placeholder:font-medium placeholder:text-base"
          placeholder="search..."
        />
        <button
          type="button"
          class=" col-span-1 h-full w-full bg-btnClr0 text-txtClr0 text-basis/normal font-semibold rounded-full space-x-1"
        >
          <svg
            class="inline-block w-5 h-5 lg:w-6 lg:w- place-self-start"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
            ></path>
          </svg>
          <span class=" max-md:hidden">Filter</span>
        </button>
      </form>
    </div>
  `,
  styles: [ ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {}
