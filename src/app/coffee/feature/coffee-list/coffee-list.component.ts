import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CoffeeCardComponent } from '../../ui/coffee-card/coffee-card.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, mergeMap } from 'rxjs';
import { Coffee } from '../../models/coffee';
import { animate } from 'motion';
import { Store } from '@ngrx/store';
import { OrderUIActions } from 'src/app/order/data-access/store/order-ui.actions';
import { Item } from 'src/app/order/models';
import {
  isAddedToCart,
} from 'src/app/order/data-access/store';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule, CoffeeCardComponent, RouterModule, AsyncPipe],
  templateUrl: './coffee-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeListComponent implements OnInit, AfterViewInit {
  coffee$!: Observable<Coffee[] | null>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngAfterViewInit(): void {
    const lines = document.querySelectorAll('#line');
    if (lines.length) {
      animate(
        lines,
        { y: -5, opacity: 0 },
        {
          repeat: Infinity,
          duration: 2,
        }
      );
    }
  }

  ngOnInit(): void {
    this.coffee$ = this.route.data.pipe(
      mergeMap((data) => data['coffee'])
    ) as any;
  }

  addToCart(size: string, quantity: number, coffee: Coffee): void {
    let item: Item = {
      id: coffee.id,
      name: coffee.title,
      size: size ?? coffee.size,
      imageSrc: coffee.imageSrc,
      quantity,
      unitPrice:+coffee.price,
      totalPrice: quantity * +coffee.price,
    };

    this.store.dispatch(OrderUIActions.addToCart({ item }));
  }

  removeFromCart(itemId: number) {
    this.store.dispatch(OrderUIActions.removeFromCart({ itemId }));
  }

  isAddedToCart(itemId: number): Observable<boolean> {
    return this.store.select(isAddedToCart(itemId));
  }

}
