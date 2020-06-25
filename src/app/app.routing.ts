import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {PresentationComponent} from './presentation/presentation.component';
import {RulesComponent} from "./rules/rules.component";

const routes: Routes = [
  {path: 'rules', component: RulesComponent},
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
