import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ServerService} from '../service/server.service';
import {ServerResponse} from '../types/request';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit, OnDestroy {
  serverData: ServerResponse;
  date: Date = new Date();

  myParams = {
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: '#fff'
      }
    }
  };

  myStyle = {
    'z-index': 10,
    height: '100%',
    width: '100%',
    position: 'absolute'
  };

  constructor(
    private serverService: ServerService
  ) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = document.getElementsByClassName('add-animation');
    const scrollPosition = window.pageYOffset;

    for (let i = 0; i < componentPosition.length; i++) {
      const rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add('animated');
      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove('animated');
      }
    }
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.serverService.getServerData().toPromise().then((data: ServerResponse) => {
      this.serverData = data;
    });
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    body.classList.remove('loading');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
