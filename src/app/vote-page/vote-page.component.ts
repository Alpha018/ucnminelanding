import {Component, OnInit} from '@angular/core';
import {ContentfulService} from '../service/contentful/contentful.service';
import {Entry} from 'contentful';
import {Reward} from '../types/contentfulResponse';
import {GoogleAnalyticsService} from 'mugan86-ng-google-analytics';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent implements OnInit {

  rewards: Entry<Reward>;

  constructor(
    private readonly contentfulService: ContentfulService,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) { }

  async ngOnInit(): Promise<void> {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.rewards = await this.contentfulService.getRewards();
  }

  goToVote() {
    this.googleAnalyticsService.eventEmitter('shop', 'VOTE_BUTTON_TAPPED');
    window.open('https://minecraft-mp.com/server/261125/vote/', '_blank');
  }
}
