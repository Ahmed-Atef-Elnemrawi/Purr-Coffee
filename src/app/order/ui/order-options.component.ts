import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'order-options',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div
    class="w-full md:w-[50vw] lg:w-full h-fit flex flex-row space-y-1 flex-wrap place-content-center place-items-center md:place-content-around md:m-auto
    lg:place-content-center space-x-2 md:space-x-5 lg:space-x-2 max-[360px]:space-x-1"
  >
    <button
      #btn
      type="button"
      class="w-fit text-base/snug md:text-lg py-1 md:px-4 lg:text-base border-2 border-btnClr1 rounded-full px-4 lg:px-4 font-medium max-[320px]:text-[12px] active"
      value="delivery"
      (click)="changeOption('delivery')"
    >
      Delivery
    </button>
    <button
      #btn
      type="button"
      class="w-fit text-base/snug md:text-lg md:px-4 py-1 lg:text-base border-2 border-btnClr1 rounded-full px-4 lg:px-4 font-medium max-[320px]:text-[12px]"
      value="dine in"
      (click)="changeOption('dine in')"
    >
      Dine in
    </button>

    <button
      #btn
      type="button"
      class="w-fit text-base/snug py-1 md:text-lg md:px-4 lg:text-base border-2 border-btnClr1 rounded-full px-4 lg:px-4 font-medium max-[320px]:text-[12px]"
      value="take away"
      (click)="changeOption('take away')"
    >
      Take away
    </button>
  </div>`,
  styles: [
    `
      .active {
        @apply bg-btnClr1 text-white;
      }
    `,
  ],
})
export class OrderOptions implements AfterViewInit {
  @ViewChildren('btn')
  buttons!: ElementRef<HTMLElement>[];

  @Output()
  optionChanged = new EventEmitter<{option: string}>()

  constructor(private el: Renderer2) {}

  ngAfterViewInit(): void {
    this.toggleActiveButton(this.buttons);
  }

  changeOption(option: string){
    this.optionChanged.emit({option: option});
  }

  private toggleActiveButton(buttons: any[]) {
    buttons.forEach((btn) =>
      btn.nativeElement.addEventListener('click', () => {
        buttons.forEach((btn) =>
          this.el.removeClass(btn.nativeElement, 'active')
        );
        this.el.addClass(btn.nativeElement, 'active');
      })
    );
  }
}
