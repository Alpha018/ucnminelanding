import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../../environments/environment'
import {CarouselServer, CarouselUser} from "../../types/contentfulResponse";

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
}
