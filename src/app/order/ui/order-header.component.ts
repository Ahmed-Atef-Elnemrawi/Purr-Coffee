import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-header',
  standalone:true,
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <div
    class="flex max-sm:py-4 text-xl md:text-xl lg:text-sm font-bold space-x-4 place-content-between lg:place-content-between lg:h-fit lg:grow lg:space-x-2 lg:font-semibold "
  >
    <h1 class="tracking-wider lg:text-lg">Cart</h1>
    <span class="opacity-30">Order{{orderId}}</span>
  </div>
`
})

export class OrderHeader implements OnInit {
  @Input({required:true})
  orderId!:string;

  constructor() { }

  ngOnInit() { }
}
