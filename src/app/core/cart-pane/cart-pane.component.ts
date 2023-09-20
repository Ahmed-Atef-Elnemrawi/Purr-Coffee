import {
  ChangeDetectionStrategy,
  Component,
  Host,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { Observable } from 'rxjs';
import { CartPaneService } from './cart-pane.service';
import { OptionGroupComponent } from 'src/app/shared/button-group/option-group.component';
import { OptionComponent } from 'src/app/shared/button-group/option/option.component';

@Component({
  selector: 'app-cart-pane',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    OptionGroupComponent,
    OptionComponent,
  ],
  templateUrl: './cart-pane.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPaneComponent implements OnInit {
  toggle$!: Observable<boolean>;

  constructor(private cartPaneService: CartPaneService) {}

  ngOnInit(): void {
    this.toggle$ = this.cartPaneService.toggleState$;
  }

  toggle() {
    this.cartPaneService.toggle();
  }
}
