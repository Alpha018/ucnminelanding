import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, interval} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  getServerStatus() {
    return new Observable((observer) => {
      interval(10000).subscribe(async () => {
        try {
          const result = await this.getServerData().toPromise();
          observer.next(result);
        } catch (e) {
          observer.error(e);
        }
      });
    })
  }

  getServerData() {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.mcsrvstat.us/ping/ucncraft.cl')
  }

  getServerDataMC() {
    return this.http.get(`https://minecraft-mp.com/api/?object=servers&element=detail&key=${environment.mcKey}`)
  }
}
