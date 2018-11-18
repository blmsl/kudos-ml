

export interface KudosSiteModel {
  _KudosSite: SITE;
}

// 1
export interface SITE {
  _SITE_ID: string;
  AREA: string;
  CLUSTER_ID: string;
  CLUSTER_NAME: string;
  OPERATOR: string;
  OWNER: string;
  REGION: string;
  SITE_NAME: string;
  SITE_TYPE: string;
  LOCATION: LOCATION;
  CUSTOM?: string[];
  _SECTORS: SECTOR[];
}

// 2
export interface SECTOR {
  _SECTOR_ID: string;
  ENODEB_ID: string;
  ENODEBNAME: string;
  ANTENNA_NUMBER: string;
  CUSTOM?: string[];
  _ANTENNAS: ANTENNA[];
}


export interface ANTENNA {
  _ANTENNA_ID: string;
  ANTENNA_HEIGHT: string;
  ANTENNA_NAME: string;
  AZIMUTH: string;
  BEAMWIDTH_H: string;
  GROUND_HEIGHT: string;
  MHA: string;
  TILT_ELEC: string;
  TILT_MECH: string;
  CUSTOM?: string[];
  _CELLS: CELL[];
}


export interface CELL {
  _CELL_ID: string;
  _CELL_REF: string;
  ARFCN: string;
  CELL_TYPE: string;
  LAYER: string;
  TECH_GEN: string;
  TX_LOSS: string;
  TX_POWER: string;
  CUSTOM?: string[];
  CELL_LTE?: CELLLTE;
  CELL_UMTS?: CELLWCDMA;
  CELL_GSM?: CELLGSM;
}

export interface CELLLTE {
  PCI: string;
  RSI: string;
  TAC: string;
}

export interface CELLWCDMA {
  LAC: string;
  PSC: string;
  RAC: string;
  SAC: string;
  URA: string;
}

export interface CELLGSM {
  LAC: string;
  NCC: string;
  RAC: string;
  TRX_LIST?: string;
  URA: string;
  BCC: string;
  BCCH: string;
}


export interface LOCATION {
  ADDRESS?: {
    Addr1?: string;
    Addr2?: string;
    Addr3?: string;
    Town?: string;
    County: string;
    Postcode?: string;
  };
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
