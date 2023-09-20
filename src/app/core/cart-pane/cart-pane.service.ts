import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartPaneService {
  private toggleStateSub$ = new BehaviorSubject<boolean>(false);
  toggleState$ = this.toggleStateSub$.asObservable();

  constructor() {}

  toggle(){
    let currentState = !this.toggleStateSub$.getValue();
    this.toggleStateSub$.next(currentState);
  }

}
