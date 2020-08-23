import {FormControl, FormGroup, Validators} from "@angular/forms";

export class Transaction {
  static init() {
    return new FormGroup({
      userName: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      payMethod: new FormControl(
        'webPay',
        [
          Validators.required,
        ]
      )
    })
  }
}
