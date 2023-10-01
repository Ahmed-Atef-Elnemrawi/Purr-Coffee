import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { itemsCount } from 'src/app/order/data-access/store/order.feature';


@Component({
  selector: 'app-navigation-pane',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: 'navigation-pane.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
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
  orderItemsCount$ = inject(Store).select(itemsCount);
}
