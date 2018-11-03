export interface GeoFeatures {
  type: string;
  features: GeoFeature[];
}

export interface GeoFeature {
  type: string;
  properties: {};
  geometry: {
    type: string;
    coordinates: [GeoCoords[]];
  };
}

export interface GeoCoords {
  coordinates: [number, number];
}
