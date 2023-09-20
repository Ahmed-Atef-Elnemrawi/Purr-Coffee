import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartPaneService } from '../cart-pane/cart-pane.service';

@Component({
  selector: 'app-navigation-pane',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: 'navigation-pane.component.html',
  styles: [
    `
      .active {
        @apply border-r-2 border-btnClr0  text-btnClr0 max-lg:border-0 font-semibold;
        > svg {
          stroke: #ffa16c;
          stroke-width:2.5
        }
      }
    `,
  ],
})
export class NavigationPaneComponent {

  constructor(private cartPaneService: CartPaneService){}

  toggleMyOrders(){
    this.cartPaneService.toggle();
  }
}
