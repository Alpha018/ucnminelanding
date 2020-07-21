import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {PresentationComponent} from './presentation/presentation.component';
import {RulesComponent} from "./rules/rules.component";
import {BlogComponent} from "./blog/blog.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  {path: 'rules', component: RulesComponent},
  {path: 'news', component: BlogComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'map', component: MapComponent},
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
