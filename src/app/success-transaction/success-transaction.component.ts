import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-transaction',
  templateUrl: './success-transaction.component.html',
  styleUrls: ['./success-transaction.component.scss']
})
export class SuccessTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

}
