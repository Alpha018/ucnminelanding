import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../service/contentful/contentful.service";
import {ShopItem} from "../types/contentfulResponse";
import {Entry} from "contentful";
import {Observable} from "rxjs";
import {appState} from "../reducer/transaction.reducer";
import {select, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  itemShop: Entry<ShopItem>;
  observable$: Observable<appState>;
  richTextHtml: string;
  loading = true;

  constructor(
    private readonly router: Router,
    private readonly contentfulService: ContentfulService,
    private store: Store<{transaction: appState}>
  ) {
    this.observable$ = store.pipe(select('transaction'));
  }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.observable$.subscribe(async (data) => {
      this.loading = true;

      if (!data.plan) {
        await this.router.navigate(['/shop']);
      }

      this.itemShop = await this.contentfulService.getItemShop(data.plan);

      if (!this.itemShop) {
        await this.router.navigate(['/shop']);
      }

      this.richTextHtml = documentToHtmlString(this.itemShop.fields.description);
      this.loading = false
    })

  }

  nextStep() {
    this.router.navigate(['/shop-final']);
  }
}
