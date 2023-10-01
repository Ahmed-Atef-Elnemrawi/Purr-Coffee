import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchComponent, AvatarComponent],
  template: `
    <div class="py-5 h-fit w-full flex place-content-between space-x-4 md:space-x-10 place-items-center lg:py-4 lg:space-x-6">
      <!-- logo -->
      <div
        class=" place-self-start px-4 text-lg font-bold  max-[500px]:hidden md:text-2xl md:h-10"
      >
        <span class="text-btnClr0">Purr'</span>Coffee
      </div>
      <!-- search -->
      <app-search class="grow lg:grow-0 w-4/12"></app-search>

      <!-- avatar -->
      <app-avatar class="shrink-0"></app-avatar>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
