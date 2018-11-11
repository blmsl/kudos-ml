import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat2json',
  templateUrl: './flat2json.component.html',
  styleUrls: ['./flat2json.component.scss']
})
export class Flat2jsonComponent implements OnInit {


  ex1 = [
    { 'Id': '1', 'Name': 'abc', 'Parent': '', 'attr': 'abc' },
    { 'Id': '2', 'Name': 'abc', 'Parent': '1', 'attr': 'abc' },
    { 'Id': '3', 'Name': 'abc', 'Parent': '2', 'attr': 'abc' },
    { 'Id': '4', 'Name': 'abc', 'Parent': '2', 'attr': 'abc' }
  ];

  ex2 = [
    {
      'UID': '215',
      'POLYGON': 'M25_South',
      'CHUNK': 'M25_South_IL_Camden',
      'OPERATOR': 'VF',
      'REGION': 'London',
      'AREA_OP': 'London_VF',
      'AREA_OWNER': 'London_East',
      'Optimiser': 'Vasileios_Efstathiadis',
      'Mobile_Optimiser': '7538185589',
      'RadioManager': 'Paul_Crisp',
      'Mobile_RadioManager': '7860362123',
      'CSR': '8339', 'CELL_ID': '16485',
      'SECTOR': '1',
      'MI_MYCOM_ID': '1/1/008339',
      'GENERATION': '3G',
      'BCF_INT_ID': '0',
      'BTS_INT_ID': '105',
      'WCEL_ID': '8339011',
      'FDD': '1',
      'MODEL_NAME': '2100 Suburban 4.0',
      'SITE_NAME': '57 CAREY STREET WC2A',
      'SITE_TYPE': 'Micro Cell',
      'CELL_TYPE': 'UMTS',
      'MANUFACTURER': 'NOKIA',
      'LACOD': '21002',
      'NE_ID': '2',
      'OMC_NE_NAME': 'BER-R002',
      'MSC': '0',
      'OMC_ID': 'RC3',
      'CIRCUIT': 'EEPW12681891',
      'CELL_CARRIERS': '0',
      'CELL_3G_CARRIER': '10637',
      'CALL_SAVER_CODE': '20',
      'CELL_OF_ORIGIN': '8339',
      'ZONE_CODE': '113',
      'ADR1': '57 Carey Street',
      'ADR2': '57 Carey Street',
      'ADR3': ' ,',
      'TOWN': 'London',
      'COUNTY': 'GREATER LONDON',
      'POSTCODE': 'WC2A 2JB',
      'EASTING': '531052',
      'NORTHING': '181264',
      'BCCH': '0',
      'ARFCN': '',
      'TRX_LIST': '',
      'NCC': '0',
      'BCC': '0',
      'SCC': '247',
      'SAC': '10214',
      'RAC': '135',
      'TMA': '0',
      'ENVIRONMENT': 'STSR',
      'KIT_TYPE': 'UfK1111miX1A',
      'ANTENNA_NUM': '1',
      'BEAM_WIDTH': '75',
      'ANT_NAME': 'C75X0M0**UMTS**',
      'ANT_HEIGHT': '7',
      'GROUND_HEIGHT': '0',
      'TILT': '0',
      'ELEC_TILT': '0',
      'AZIMUTH': '170',
      'POWER': '43',
      'LOSSES': '3',
      'AREA': 'London',
      'REGION_2': 'UK - London',
      'BIS_DATE': '20171231',
      'SITE_GENERATION_TYPE': '3G',
      'CELL_OWNER': 'TFinTF',
      'JV_ID': 'T0009019H',
      'CELL_SEQ_NO': '116764',
      'ENODEB_ID': '0',
      'PCI': '0',
      'TAC': '0',
      'RSI': '0',
      'URA': '0',
      'ENODEBNAME': '',
      'PSEUDO_CARRIERS': '',
      'BSC_C_NUMBER': '0',
      'CISCO_BACKHAUL': ''
    }
  ];

  result1;

  constructor () { }

  ngOnInit() {
    this.result1 = this.convert(this.ex1);
  }


  convert(array) {
    const map = {};
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      obj.items = [];

      map[obj.Id] = obj;

      const parent = obj.Parent || '-';
      if (!map[parent]) {
        map[parent] = {
          items: []
        };
      }
      map[parent].items.push(obj);
    }

    return map['-'].items;

  }

}
