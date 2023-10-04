import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { NavigationPaneComponent } from './core/navigation-pane/navigation-pane.component';
import { CoffeeCardComponent } from './coffee/ui/coffee-card/coffee-card.component';
import { DialogComponent } from './shared/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavigationPaneComponent,
    CoffeeCardComponent,
    DialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = "Purr' Coffee";

  private router = inject(Router);

  ngOnInit(): void {
    this.router.navigateByUrl('/menu');
  }

}
