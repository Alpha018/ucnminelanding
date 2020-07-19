import { Component, OnInit } from '@angular/core';
import {Entry} from "contentful";
import {UserAchievements} from "../types/contentfulResponse";
import {ContentfulService} from "../service/contentful/contentful.service";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements: Entry<UserAchievements>[] = [];

  constructor(
    private readonly contentfulService: ContentfulService
  ) { }

  async ngOnInit() {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.achievements = await this.contentfulService.getUserAchievements();
    console.log(this.achievements)
  }


}
