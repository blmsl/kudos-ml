import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../../../_core/_services/mapbox.service';

@Component({
  selector: 'app-map-controls',
  templateUrl: './map-controls.component.html',
  styleUrls: ['./map-controls.component.scss']
})
export class MapControlsComponent implements OnInit {


  mapboxStyles = [
    { label: 'Streets', mapbox: 'mapbox://styles/mapbox/streets-v10' },
    { label: 'Outdoors', mapbox: 'mapbox://styles/mapbox/outdoors-v10' },
    { label: 'Light', mapbox: 'mapbox://styles/mapbox/light-v9' },
    { label: 'Dark', mapbox: 'mapbox://styles/mapbox/dark-v9' },
    { label: 'Satellite', mapbox: 'mapbox://styles/mapbox/satellite-v9' },
    { label: 'Satellite Streets', mapbox: 'mapbox://styles/mapbox/satellite-streets-v10' }
  ];

  constructor (private mbs: MapboxService) { }

  ngOnInit() { }

  changeMapView(selectedView): void {
    this.mbs.setMapStyle(selectedView);
  }

}
