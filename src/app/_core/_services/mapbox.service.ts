import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  private initStyle = 'mapbox://styles/mapbox/streets-v10';
  public mapboxStyle: BehaviorSubject<string>;

  constructor () {

    this.mapboxStyle = new BehaviorSubject(this.initStyle);

  }


  setMapStyle(style) {
    this.mapboxStyle.next(style);
}

}
