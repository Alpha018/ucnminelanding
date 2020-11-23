import {Component, OnInit, ElementRef} from '@angular/core';
import {MCData} from '../../types/request';
import {ServerService} from '../../service/server.service';
import {Router} from '@angular/router';
import {GoogleAnalyticsService} from 'mugan86-ng-google-analytics';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  serverData: MCData;

  constructor(
    private element: ElementRef,
    private serverService: ServerService,
    private router: Router,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    this.serverService.getServerDataMC().toPromise().then((data: MCData) => {
      this.serverData = data;
    });
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  goShop() {
    this.googleAnalyticsService.eventEmitter('shop', 'GO_SHOP_NAVBAR');
    this.router.navigate(['/shop']);
  }

  goVote() {
    this.googleAnalyticsService.eventEmitter('shop', 'GO_VOTE_NAVBAR');
    this.router.navigate(['/vote']);
  }

  goAchievements() {
    this.googleAnalyticsService.eventEmitter('achievements', 'GO_ACHIEVEMENTS_NAVBAR');
    this.router.navigate(['/achievements']);
  }

  goNews() {
    this.googleAnalyticsService.eventEmitter('news', 'GO_NEWS_NAVBAR');
    this.router.navigate(['/news']);
  }

  goRules() {
    this.googleAnalyticsService.eventEmitter('rules', 'GO_RULES_NAVBAR');
    this.router.navigate(['/rules']);
  }

  goHome() {
    this.googleAnalyticsService.eventEmitter('general', 'go_home_navbar');
    this.router.navigate(['/']);
  }
}
