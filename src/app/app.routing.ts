import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {PresentationComponent} from './presentation/presentation.component';
import {RulesComponent} from "./rules/rules.component";
import {BlogComponent} from "./blog/blog.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {MapComponent} from "./map/map.component";
import {ShopComponent} from "./shop/shop.component";
import {ShopDetailComponent} from "./shop-detail/shop-detail.component";
import {FinalStepTransactionComponent} from "./final-step-transaction/final-step-transaction.component";
import {SuccessTransactionComponent} from "./success-transaction/success-transaction.component";
import {FailTransactionComponent} from "./fail-transaction/fail-transaction.component";

const routes: Routes = [
  {path: 'rules', component: RulesComponent},
  {path: 'news', component: BlogComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'map', component: MapComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop-detail', component: ShopDetailComponent},
  {path: 'shop-final', component: FinalStepTransactionComponent},
  {path: 'success', component: SuccessTransactionComponent},
  {path: 'fail', component: FailTransactionComponent},
  {path: '', component: PresentationComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
