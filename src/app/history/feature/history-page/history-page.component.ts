import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, mergeMap } from 'rxjs';
import { OrderHistory } from '../../modals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  history$!:Observable<OrderHistory[] | null>;

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    this.history$ = this.router.data.pipe(
      mergeMap(data => data['history'] as Observable<OrderHistory[]| null>)
    )
  }
}
