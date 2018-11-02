import { Component, OnInit } from '@angular/core';

import { SiteModel } from '../_core/_shared/models/models-site';

@Component( {
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
} )
export class TopologyComponent implements OnInit {

  SITE_TREE: SiteModel[];

  constructor() {

    this.SITE_TREE = [
      // New Site
      {
        Site: {
          SiteId: 'SITE_1',
          Address: '123 Street, City, Post Code',
          Name: 'Site 1',
          Location: {
            LatLong: {
              Long: 1234,
              Lat: 4321,
              Format: 'DecDeg'
            }
          },
          Sectors: [
            {
              SectorId: 1,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_1_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 0,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2001,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30011,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30012,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 110,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_1_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 30,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 114,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 115,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 116,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 117,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
            {
              SectorId: 2,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_2_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 120,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2002,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30021,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30022,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 120,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_2_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 150,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 124,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 125,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 126,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 127,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
            {
              SectorId: 3,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_3_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 240,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2003,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30031,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30032,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 130,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_3_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 270,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 134,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 135,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 136,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 137,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
          ],
        }
      },

      // New Site
      {
        Site: {
          SiteId: 'SITE_1',
          Address: '123 Street, City, Post Code',
          Name: 'Site 1',
          Location: {
            LatLong: {
              Long: 1234,
              Lat: 4321,
              Format: 'DecDeg'
            }
          },
          Sectors: [
            {
              SectorId: 1,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_1_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 0,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2001,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30011,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30012,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 110,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_1_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 30,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 114,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 115,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 116,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 117,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
            {
              SectorId: 2,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_2_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 120,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2002,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30021,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30022,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 120,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_2_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 150,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 124,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 125,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 126,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 127,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
            {
              SectorId: 3,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_3_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 240,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2003,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30031,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30032,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 130,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_3_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 270,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 134,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 135,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 136,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 137,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
          ],
        }
      },

      // New Site
      {
        Site: {
          SiteId: 'SITE_1',
          Address: '123 Street, City, Post Code',
          Name: 'Site 1',
          Location: {
            LatLong: {
              Long: 1234,
              Lat: 4321,
              Format: 'DecDeg'
            }
          },
          Sectors: [
            {
              SectorId: 1,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_1_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 0,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2001,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30011,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30012,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 110,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_1_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 30,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 114,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 115,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 116,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 117,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
            {
              SectorId: 2,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_2_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 120,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2002,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30021,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30022,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 120,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_2_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 150,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 124,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 125,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 126,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 127,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
            {
              SectorId: 3,
              Antennas: [
                {
                  AntennaId: 1,
                  AntennaModel: 'Antenna_3_1',
                  AntennaType: 'Low Band',
                  MT: 0,
                  ET: 8,
                  Azimuth: 240,
                  Height: 30,
                  Cells: [
                    {
                      Tech: '2G',
                      CellId: 2003,
                      Carrier: 'G900'
                    },
                    {
                      Tech: '3G',
                      CellId: 30031,
                      Carrier: 'U900 F3'
                    },
                    {
                      Tech: '3G',
                      CellId: 30032,
                      Carrier: 'U900 F4'
                    },
                    {
                      Tech: '4G',
                      CellId: 130,
                      Carrier: 'L800'
                    },
                  ]
                },
                {
                  AntennaId: 2,
                  AntennaModel: 'Antenna_3_2',
                  AntennaType: 'High Band',
                  MT: 0,
                  ET: 5,
                  Azimuth: 270,
                  Height: 34,
                  Cells: [
                    {
                      Tech: 'L18',
                      CellId: 134,
                      Carrier: 'L1800'
                    },
                    {
                      Tech: 'L21',
                      CellId: 135,
                      Carrier: 'L2100'
                    },
                    {
                      Tech: 'L23',
                      CellId: 136,
                      Carrier: 'L2300_1'
                    },
                    {
                      Tech: 'L23',
                      CellId: 137,
                      Carrier: 'L2300_2'
                    }
                  ]
                }
              ]
            },
          ],
        }
      }
    ];

    console.log( this.SITE_TREE );
  }

  ngOnInit() {
  }

}
