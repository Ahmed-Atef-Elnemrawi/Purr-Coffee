import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChildren,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../models';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-card.component.html',
  styles: [
    `
      .active {
        @apply bg-btnClr1 text-white;
      }

      .added {
        @apply bg-btnClr0 text-white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeCardComponent implements AfterViewInit {
  @ViewChildren('btn')
  buttons!: ElementRef<HTMLElement>[];

  @Input({ required: true })
  coffee!: Coffee;

  @Input({ required: true })
  isAddedToCart!: boolean;

  @Output()
  addToCart = new EventEmitter<any>();

  @Output()
  removeFromCart = new EventEmitter<any>();

  @Input()
  itemSize: string = 'small - 200';

  quantityOfItem = signal<number>(0);

  constructor(private el: Renderer2) {}

  ngAfterViewInit(): void {
    this.toggleActiveButton(this.buttons);
  }

  setItemSize = (selectedSize: string) => (this.itemSize = selectedSize);

  decrement() {
    this.quantityOfItem() === 0 ? this.quantityOfItem.set(0) : this.quantityOfItem.update((n) => n - 1);
  }

  increment() {
    this.quantityOfItem.update((n) => n + 1);
  }

  onAddToCart(): void {
    this.addToCart.emit({ size: this.itemSize, quantity: this.quantityOfItem() });
  }

  onRemoveFromCart(): void {
    this.removeFromCart.emit();
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
