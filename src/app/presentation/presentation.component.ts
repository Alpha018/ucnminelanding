import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ServerService} from '../service/server.service';
import {MCData} from '../types/request';
import {ContentfulService} from "../service/contentful/contentful.service";
import {CarouselServer, CarouselUser} from "../types/contentfulResponse";
import {Entry} from "contentful";
import {GoogleAnalyticsService} from "mugan86-ng-google-analytics";
import {Router} from "@angular/router";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit, OnDestroy {
  serverData: MCData;

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

  carouselImageUsers: Entry<CarouselUser>[];
  carouselImageServer: Entry<CarouselServer>[];

  constructor(
    private serverService: ServerService,
    private contentfulService: ContentfulService,
    private router: Router,
    private readonly googleAnalyticsService: GoogleAnalyticsService
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

  async ngOnInit() {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');

    this.carouselImageUsers = await this.contentfulService.getUserCarousel()
    this.carouselImageServer = await this.contentfulService.getServerCarousel();
    this.serverService.getServerDataMC().toPromise().then((data: MCData) => {
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

  goShop() {
    this.googleAnalyticsService.eventEmitter('shop', 'GO_SHOP_SECTION');
    this.router.navigate(['/shop']);
  }

  goDynMap() {
    this.googleAnalyticsService.eventEmitter('shop', 'GO_MAP');
    this.router.navigate(['/map']);
  }
}
