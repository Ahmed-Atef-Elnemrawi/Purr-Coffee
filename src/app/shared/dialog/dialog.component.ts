import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="w-screen h-screen fixed top-0 bottom-0 right-0 left-0 flex flex-col place-content-center place-items-center bg-transparent z-[99999]"
    >
      <div class=" max-w-sm h-fit flex bg-white fixed flex-col place-content-around space-y-4 py-4 px-5 shadow-2xl rounded-3xl">
        <p class="text-xl font-medium place-self-start">{{ header }}</p>
        <p class="text-base/snug font-medium opacity-70 max-w-prose">
          {{ content }}
        </p>
        <div
          class="flex flex-row place-content-end place-items-center space-x-6"
        >
          <button
            type="button"
            class="text-sm font-medium px-3 py-1 rounded-full border-2 bg-btnClr0 text-white border-btnClr0"
            (click)="onPrimaryAction()"
          >
            {{ primaryActionName }}
          </button>
          <button
            type="button"
            class="text-sm font-medium px-3 py-1 text-btnClr1 rounded-full border-2 "
            (click)="onSecondaryAction()"
          >
            {{ secondaryActionName }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  @Input({ required: true })
  header!: string;

  @Input({ required: true })
  content!: string;

  @Input({ required: true })
  primaryActionName!: string;

  @Input({ required: true })
  secondaryActionName!: string;

  @Output()
  PrimaryAction = new EventEmitter();

  @Output()
  SecondaryAction = new EventEmitter();

  onPrimaryAction() {
    this.PrimaryAction.emit();
  }

  onSecondaryAction() {
    this.SecondaryAction.emit();
  }
}
