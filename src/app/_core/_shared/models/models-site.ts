export interface SiteModel {
  Site: SITE;
}

export interface SITE {
  SiteId: string;
  Address?: string;
  Name: string;
  Location: LOCATION;
  Sectors: SECTOR[];
}


export interface SECTOR {
  SectorId: number;
  Antennas: ANTENNA[];
}


export interface ANTENNA {
  AntennaId: number;
  AntennaModel: String;
  AntennaType: String;
  MT: number;
  ET: number;
  Azimuth: number;
  Height: number;
  Cells: CELL[];
}


export interface CELL {
  Tech: string;
  CellId: number;
  Carrier: string;
}


export interface LOCATION {
  LatLong?: {
    Long: number;
    Lat: number;
    Format: string;
  };
  NGR?: {
    X: number;
    Y: number;
    ZONE?: string;
  };
}
