import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../../../_core/_services/mapbox.service';
// import { GeoJson } from '../../../_core/_models/geo-models';

import * as mapboxgl from 'mapbox-gl';
import { MapboxConfig } from '../../../../environments/kudos-config';


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {


  map: mapboxgl.Map;
  lat = 51.514;
  lng = -0.089;



  constructor (private mbs: MapboxService) {
    mapboxgl.accessToken = MapboxConfig.accessToken;
  }

  ngOnInit() {

    this.buildMap();

    this.mbs.mapboxStyle.subscribe((style) => {
      this.map.setStyle(style);
    });


  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapbox-explorer-map',
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }

}
