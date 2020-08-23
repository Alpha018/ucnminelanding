import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // this is needed!
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

import {PresentationModule} from './presentation/presentation.module';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RulesComponent } from './rules/rules.component';
import { BlogComponent } from './blog/blog.component';
import {TimeAgoPipe} from "./shared/pipes/time-ago.pipe";
import { AchievementsComponent } from './achievements/achievements.component';
import { MapComponent } from './map/map.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/transaction.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { FinalStepTransactionComponent } from './final-step-transaction/final-step-transaction.component';
import { SuccessTransactionComponent } from './success-transaction/success-transaction.component';
import { FailTransactionComponent } from './fail-transaction/fail-transaction.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module} from 'ng-recaptcha';
import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RulesComponent,
    BlogComponent,
    TimeAgoPipe,
    AchievementsComponent,
    MapComponent,
    ShopComponent,
    FooterComponent,
    ShopDetailComponent,
    FinalStepTransactionComponent,
    SuccessTransactionComponent,
    FailTransactionComponent
  ],
  imports: [
    Mugan86GoogleAnalyticsModule.forRoot({
      analyticsId: environment.analyticsId,
      showLog: false
    }),
    StoreModule.forRoot({
      transaction: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 4
    }),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    PresentationModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    RecaptchaV3Module,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaKey },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
