import {Component, OnInit, OnDestroy, HostListener, ElementRef} from '@angular/core';
import {ServerService} from "../service/server.service";
import {ServerResponse} from "../types/request";

declare const $: any;


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit, OnDestroy {
  serverData: ServerResponse;
  myParams: object = {};
  myStyle: object = {};
  model = {
    left: true,
    middle: false,
    right: false
  };
  date: Date = new Date();

  constructor(
    public el: ElementRef,
    private serverService: ServerService
  ) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = document.getElementsByClassName('add-animation');
    const scrollPosition = window.pageYOffset;

    for (var i = 0; i < componentPosition.length; i++) {
      var rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add('animated');
      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove('animated');
      }
    }
  }

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: '#fff'
        }
      }
    };
    this.myStyle = {
      'z-index': 10,
      height: '100%',
      width: '100%',
      position: 'absolute'
    };
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.serverService.getServerData().toPromise().then((data: ServerResponse) => {
      this.serverData = data;
    });
    this.serverService.getServerStatus().subscribe((data: ServerResponse) => {
      this.serverData = data;
    })
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    body.classList.remove('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
