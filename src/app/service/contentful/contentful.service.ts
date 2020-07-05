import {Injectable} from '@angular/core';
import {createClient, Entry} from 'contentful';
import {environment} from '../../../environments/environment'
import {Blog, CarouselServer, CarouselUser, Rules} from "../../types/contentfulResponse";

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
    host: environment.contentful.host
  });

  constructor() { }

  async getUserCarousel(): Promise<Entry<CarouselUser>[]>{
    const data = await this.cdaClient.getEntries<CarouselUser>(Object.assign({
      content_type: 'carouselUsers'
    }));
    return data.items;
  }

  async getServerCarousel(): Promise<Entry<CarouselServer>[]>{
    const data = await this.cdaClient.getEntries<CarouselServer>(Object.assign({
      content_type: 'carruselServer'
    }));
    return data.items;
  }

  async getBlogPost(): Promise<Entry<Blog>[]> {
    const data = await this.cdaClient.getEntries<Blog>(Object.assign({
      content_type: 'blog'
    }));
    return data.items;
  }

  async getRules(): Promise<Entry<Rules>> {
    return this.cdaClient.getEntry<any>('3EH1w9eyvkaI8v5T5LYZgj');
  }
}
