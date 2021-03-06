import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MapboxService } from '../../../_core/_services/mapbox.service';
// import { GeoJson } from '../../../_core/_models/geo-models';

import * as mapboxgl from 'mapbox-gl';
import { MapboxConfig } from '../../../../environments/kudos-config';


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  map: mapboxgl.Map;
  lat = 51.514;
  lng = -0.089;



  constructor (private mbs: MapboxService) {
    mapboxgl.accessToken = MapboxConfig.accessToken;
  }

  ngOnInit() {

    this.buildMap();

    this.mbs.mapboxStyle
      .pipe(takeUntil(this.destroy$))
      .subscribe((style) => {
        this.map.setStyle(style);
      });

  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  buildMap() {

    this.map = new mapboxgl.Map({
      container: 'mapbox-explorer-map',
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 13,
      center: [this.lng, this.lat]
    });

    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, 'top-right');
    this.map.addControl(new mapboxgl.FullscreenControl());

  }

}
