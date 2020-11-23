import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ContentfulService} from '../service/contentful/contentful.service';
import {appState} from '../reducer/transaction.reducer';
import {Observable} from 'rxjs';
import {InitTransactionRequest, TransactionService} from '../service/transaction/transaction.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-final-step-transaction',
  templateUrl: './final-step-transaction.component.html',
  styleUrls: ['./final-step-transaction.component.scss']
})
export class FinalStepTransactionComponent implements OnInit {
  observable$: Observable<appState>;
  plan: string;
  loading = true;
  loadingRequest = false;

  constructor(
    private readonly router: Router,
    private readonly contentfulService: ContentfulService,
    public readonly transactionService: TransactionService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private store: Store<{ transaction: appState }>
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

      this.plan = data.plan;
      this.loading = false
    })
  }

  validatePattern(event) {
    return !/[^a-zA-Z0-9]/.test(event.key);
  }

  async submit() {
    this.loadingRequest = true;
    const {userName, payMethod} = this.transactionService.schema.value;
    const captchaKey = await this.recaptchaV3Service.execute('importantAction').toPromise();

    try {
      const result = await this.transactionService.getUrlInitTransaction('VIP', payMethod, userName, captchaKey)
        .toPromise() as InitTransactionRequest;
      window.open(`${result.url}?token_ws=${result.token}`, '_self')
    } catch (e) {
      console.log(e);
    }
  }
}
