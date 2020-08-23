import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {appState} from "../reducer/transaction.reducer";

import * as fromTransaction from '../reducer/transaction.action';
import {Router} from "@angular/router";
import {GoogleAnalyticsService} from "mugan86-ng-google-analytics";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  observable$: Observable<appState>;

  constructor(
    private readonly googleAnalyticsService: GoogleAnalyticsService,
    private readonly router: Router,
    private store: Store<{transaction: appState}>
  ) {
    this.observable$ = store.pipe(select('transaction'));
  }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  changePlanState(plan: string) {
    this.googleAnalyticsService.eventEmitter('shop', `VIEW_${plan}_PLAN`);
    this.store.dispatch(new fromTransaction.ChangePlan({ plan }));
    this.router.navigate(['/shop-detail'])
  }
}
