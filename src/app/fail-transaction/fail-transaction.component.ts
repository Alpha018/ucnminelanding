import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail-transaction',
  templateUrl: './fail-transaction.component.html',
  styleUrls: ['./fail-transaction.component.scss']
})
export class FailTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

}
