import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "../service/contentful/contentful.service";
import {Entry} from "contentful";
import {Blog} from "../types/contentfulResponse";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Entry<Blog>[] = [];

  constructor(
    private readonly contentfulService: ContentfulService
  ) {
  }

  async ngOnInit() {
    this.blogs = await this.contentfulService.getBlogPost();
  }

  getClassTag(tag: string) {
    switch (tag) {
      case 'Información':
        return 'text-success'
      case 'Técnico':
        return 'text-info'
      case 'Juego':
        return 'text-danger'
      case 'Donador':
        return 'text-warning'
      default:
        return ''
    }
  }
}
