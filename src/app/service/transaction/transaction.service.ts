import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Transaction} from "./transaction";

export interface InitTransactionRequest {
  url: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  schema = Transaction.init();

  constructor(
    private readonly http: HttpClient
  ) { }

  getUrlInitTransaction(plan: string, payMethod: string, userName: string, tokenRecaptcha: string) {
    return this.http.post(`${environment.backendUrl}/webpay/init-transaction`, {
      plan,
      payMethod,
      userName
    }, {
      headers: {
        'x-service-authorization': `mcServer ${environment.mcServerBackend.serverId}`,
        'x-device-authorization': `reCAPTCHA ${tokenRecaptcha}`
      }
    })
  }
}
