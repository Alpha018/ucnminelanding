import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../service/contentful/contentful.service";
import {Rules} from "../types/contentfulResponse";
import {Entry} from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  rules: Entry<Rules>;
  richTextHtml: string;

  constructor(
    private readonly contentfulService: ContentfulService
  ) { }

  async ngOnInit(): Promise<void> {
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.rules = await this.contentfulService.getRules();
    this.richTextHtml = documentToHtmlString(this.rules.fields.rules);
  }

}
