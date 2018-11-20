const groupMap = new Map();

const groupMapping = [
  ['CLUSTER_ID', 'SITE'],
  ['AREA', 'SITE'],
  ['CLUSTER_NAME', 'SITE'],
  ['OPERATOR', 'SITE'],
  ['REGION', 'SITE'],
  ['_AREA_OP', 'CUSTOM_SITE'],
  ['_AREA_OWNER', 'CUSTOM_SITE'],
  ['OWNER', 'SITE'],
  ['_MOBILE_OPTIMISER', 'CUSTOM_SITE'],
  ['_RADIOMANAGER', 'CUSTOM_SITE'],
  ['_MOBILE_RADIOMANAGER', 'CUSTOM_SITE'],
  ['SITE_ID', 'SITE'],
  ['CELL_ID', 'CELL'],
  ['SECTOR_ID', 'SECTOR'],
  ['CELL_REF', 'CELL'],
  ['TECH_GEN', 'CELL'],
  ['_BCF_INT_ID', 'CUSTOM_CELL'],
  ['_BTS_INT_ID', 'CUSTOM_CELL'],
  ['OSS_CELLID', 'CELL'],
  ['LAYER', 'CELL'],
  ['_MODEL_NAME', 'CUSTOM_CELL'],
  ['SITE_NAME', 'SITE'],
  ['SITE_TYPE', 'SITE'],
  ['CELL_TYPE', 'CELL'],
  ['_MANUFACTURER', 'CUSTOM_CELL'],
  ['LAC', 'CELL'],
  ['_NE_ID', 'CUSTOM_CELL'],
  ['_OMC_NE_NAME', 'CUSTOM_CELL'],
  ['_MSC', 'CUSTOM_CELL'],
  ['_OMC_ID', 'CUSTOM_CELL'],
  ['_CIRCUIT', 'CUSTOM_CELL'],
  ['_CELL_CARRIERS', 'CUSTOM_CELL'],
  ['ARFCN', 'CELL'],
  ['_CALL_SAVER_CODE', 'CUSTOM_CELL'],
  ['_CELL_OF_ORIGIN', 'CUSTOM_CELL'],
  ['_ZONE_CODE', 'CUSTOM_CELL'],
  ['ADR1', 'SITE'],
  ['ADR2', 'SITE'],
  ['ADR3', 'SITE'],
  ['TOWN', 'SITE'],
  ['COUNTY', 'SITE'],
  ['POSTCODE', 'SITE'],
  ['EASTING', 'SITE'],
  ['NORTHING', 'SITE'],
  ['BCCH', 'CELL'],
  ['ARFCN', 'CELL'],
  ['TRX_LIST', 'CELL'],
  ['NCC', 'CELL'],
  ['BCC', 'CELL'],
  ['PSC', 'CELL'],
  ['SAC', 'CELL'],
  ['RAC', 'CELL'],
  ['_TMA', 'CUSTOM_ANTENNA'],
  ['_ENVIRONMENT', 'CUSTOM_SECTOR'],
  ['_KIT_TYPE', 'CUSTOM_CELL'],
  ['_ANTENNA_NUM', 'SECTOR'],
  ['BEAMWIDTH_H', 'ANTENNA'],
  ['ANTENNA_NAME', 'ANTENNA'],
  ['ANTENNA_HEIGHT', 'ANTENNA'],
  ['GROUND_HEIGHT', 'ANTENNA'],
  ['TILT_MECH', 'ANTENNA'],
  ['TILT_ELEC', 'ANTENNA'],
  ['AZIMUTH', 'ANTENNA'],
  ['TX_POWER', 'CELL'],
  ['TX_LOSS', 'CELL'],
  ['_AREA', 'CUSTOM_SITE'],
  ['_REGION_2', 'CUSTOM_SITE'],
  ['_BIS_DATE', 'CUSTOM_CELL'],
  ['_SITE_GENERATION_TYPE', 'CUSTOM_SECTOR'],
  ['_CELL_OWNER', 'CUSTOM_CELL'],
  ['_JV_ID', 'CUSTOM_SITE'],
  ['_CELL_SEQ_NO', 'CUSTOM_CELL'],
  ['ENODEB_ID', 'SECTOR'],
  ['PCI', 'CELL'],
  ['TAC', 'CELL'],
  ['RSI', 'CELL'],
  ['URA', 'CELL'],
  ['ENODEBNAME', 'SECTOR'],
  ['_PSEUDO_CARRIERS', 'CUSTOM_CELL'],
  ['_BSC_C_NUMBER', 'CUSTOM_CELL'],
  ['CISCO_BACKHAUL', 'CUSTOM_SITE']
];

const database = [
  [{ 'CLUSTER_ID': '217', 'AREA': 'M25_South', 'CLUSTER_NAME': 'M25_South_IL_CityofLondon', 'OPERATOR': 'VF', 'REGION': 'London', '_AREA_OP': 'London_VF', '_AREA_OWNER': 'London_East', 'OWNER': 'Opt_7_J_W', '_MOBILE_OPTIMISER': '', '_RADIOMANAGER': 'P_C', '_MOBILE_RADIOMANAGER': '', 'SITE_ID': '107', 'CELL_ID': '110', 'SECTOR_ID': '1', 'CELL_REF': '1/L1/000107', 'TECH_GEN': '4G', '_BCF_INT_ID': '0', '_BTS_INT_ID': '0', 'OSS_CELLID': '0', 'LAYER': '1', '_MODEL_NAME': '0800 Dense Urban 4.0', 'SITE_NAME': 'Broadway Circle', 'SITE_TYPE': 'Sectored', 'CELL_TYPE': 'LTE', '_MANUFACTURER': 'NOKIA', 'LAC': '0', '_NE_ID': '0', '_OMC_NE_NAME': '', '_MSC': '0', '_OMC_ID': 'RC3', '_CIRCUIT': 'UNKNOWN', '_CELL_CARRIERS': '0', 'ARFCN': '', '_CALL_SAVER_CODE': '', '_CELL_OF_ORIGIN': '', '_ZONE_CODE': '113', 'ADR1': '55 Old Broad Street', 'ADR2': '55 Old Broad Street', 'ADR3': '', 'TOWN': 'London', 'COUNTY': 'GREATER LONDON', 'POSTCODE': 'EC2M 1RX', 'EASTING': '533117', 'NORTHING': '181470', 'BCCH': '0', 'TRX_LIST': '', 'NCC': '0', 'BCC': '0', 'PSC': '0', 'SAC': '', 'RAC': '', '_TMA': '', '_ENVIRONMENT': '', '_KIT_TYPE': 'LfK31e000000X6', '_ANTENNA_NUM': '1', 'BEAMWIDTH_H': '65', 'ANTENNA_NAME': 'H65DUU33WW20C10**800**10**', 'ANTENNA_HEIGHT': '39', 'GROUND_HEIGHT': '0', 'TILT_MECH': '5', 'TILT_ELEC': '10', 'AZIMUTH': '0', 'TX_POWER': '43', 'TX_LOSS': '0', '_AREA': 'London', '_REGION_2': 'UK - London', '_BIS_DATE': '20171231', '_SITE_GENERATION_TYPE': '2G-3G-4G', '_CELL_OWNER': 'TFinTF', '_JV_ID': 'J0000038H', '_CELL_SEQ_NO': '306471', 'ENODEB_ID': '521864', 'PCI': '309', 'TAC': '14528', 'RSI': '26', 'URA': '0', 'ENODEBNAME': '', '_PSEUDO_CARRIERS': '', '_BSC_C_NUMBER': '0', '_CISCO_BACKHAUL': '' }],
  [{ 'CLUSTER_ID': '217', 'AREA': 'M25_South', 'CLUSTER_NAME': 'M25_South_IL_CityofLondon', 'OPERATOR': 'VF', 'REGION': 'London', '_AREA_OP': 'London_VF', '_AREA_OWNER': 'London_East', 'OWNER': 'Opt_7_J_W', '_MOBILE_OPTIMISER': '', '_RADIOMANAGER': 'P_C', '_MOBILE_RADIOMANAGER': '', 'SITE_ID': '107', 'CELL_ID': '120', 'SECTOR_ID': '2', 'CELL_REF': '2/L1/000107', 'TECH_GEN': '4G', '_BCF_INT_ID': '0', '_BTS_INT_ID': '0', 'OSS_CELLID': '0', 'LAYER': '1', '_MODEL_NAME': '0800 Dense Urban 4.0', 'SITE_NAME': 'Broadway Circle', 'SITE_TYPE': 'Sectored', 'CELL_TYPE': 'LTE', '_MANUFACTURER': 'NOKIA', 'LAC': '0', '_NE_ID': '0', '_OMC_NE_NAME': '', '_MSC': '0', '_OMC_ID': 'RC3', '_CIRCUIT': 'UNKNOWN', '_CELL_CARRIERS': '0', 'ARFCN': '', '_CALL_SAVER_CODE': '', '_CELL_OF_ORIGIN': '', '_ZONE_CODE': '113', 'ADR1': '55 Old Broad Street', 'ADR2': '55 Old Broad Street', 'ADR3': '', 'TOWN': 'London', 'COUNTY': 'GREATER LONDON', 'POSTCODE': 'EC2M 1RX', 'EASTING': '533117', 'NORTHING': '181470', 'BCCH': '0', 'TRX_LIST': '', 'NCC': '0', 'BCC': '0', 'PSC': '0', 'SAC': '', 'RAC': '', '_TMA': '', '_ENVIRONMENT': '', '_KIT_TYPE': 'LfK31e000000X6', '_ANTENNA_NUM': '1', 'BEAMWIDTH_H': '65', 'ANTENNA_NAME': 'H65DUU33WW20C10**800**10**', 'ANTENNA_HEIGHT': '39', 'GROUND_HEIGHT': '0', 'TILT_MECH': '3', 'TILT_ELEC': '10', 'AZIMUTH': '120', 'TX_POWER': '43', 'TX_LOSS': '0', '_AREA': 'London', '_REGION_2': 'UK - London', '_BIS_DATE': '20171231', '_SITE_GENERATION_TYPE': '2G-3G-4G', '_CELL_OWNER': 'TFinTF', '_JV_ID': 'J0000038H', '_CELL_SEQ_NO': '306449', 'ENODEB_ID': '521864', 'PCI': '310', 'TAC': '14528', 'RSI': '26', 'URA': '0', 'ENODEBNAME': '', '_PSEUDO_CARRIERS': '', '_BSC_C_NUMBER': '0', '_CISCO_BACKHAUL': '' }],
  [{ 'CLUSTER_ID': '217', 'AREA': 'M25_South', 'CLUSTER_NAME': 'M25_South_IL_CityofLondon', 'OPERATOR': 'VF', 'REGION': 'London', '_AREA_OP': 'London_VF', '_AREA_OWNER': 'London_East', 'OWNER': 'Opt_7_J_W', '_MOBILE_OPTIMISER': '', '_RADIOMANAGER': 'P_C', '_MOBILE_RADIOMANAGER': '', 'SITE_ID': '107', 'CELL_ID': '130', 'SECTOR_ID': '3', 'CELL_REF': '3/L1/000107', 'TECH_GEN': '4G', '_BCF_INT_ID': '0', '_BTS_INT_ID': '0', 'OSS_CELLID': '0', 'LAYER': '1', '_MODEL_NAME': '0800 Dense Urban 4.0', 'SITE_NAME': 'Broadway Circle', 'SITE_TYPE': 'Sectored', 'CELL_TYPE': 'LTE', '_MANUFACTURER': 'NOKIA', 'LAC': '0', '_NE_ID': '0', '_OMC_NE_NAME': '', '_MSC': '0', '_OMC_ID': 'RC3', '_CIRCUIT': 'UNKNOWN', '_CELL_CARRIERS': '0', 'ARFCN': '', '_CALL_SAVER_CODE': '', '_CELL_OF_ORIGIN': '', '_ZONE_CODE': '113', 'ADR1': '55 Old Broad Street', 'ADR2': '55 Old Broad Street', 'ADR3': '', 'TOWN': 'London', 'COUNTY': 'GREATER LONDON', 'POSTCODE': 'EC2M 1RX', 'EASTING': '533117', 'NORTHING': '181470', 'BCCH': '0', 'TRX_LIST': '', 'NCC': '0', 'BCC': '0', 'PSC': '0', 'SAC': '', 'RAC': '', '_TMA': '', '_ENVIRONMENT': '', '_KIT_TYPE': 'LfK31e000000X6', '_ANTENNA_NUM': '1', 'BEAMWIDTH_H': '65', 'ANTENNA_NAME': 'H65DUU33WW20C10**800**10**', 'ANTENNA_HEIGHT': '39', 'GROUND_HEIGHT': '0', 'TILT_MECH': '6', 'TILT_ELEC': '10', 'AZIMUTH': '235', 'TX_POWER': '43', 'TX_LOSS': '0', '_AREA': 'London', '_REGION_2': 'UK - London', '_BIS_DATE': '20171231', '_SITE_GENERATION_TYPE': '2G-3G-4G', '_CELL_OWNER': 'TFinTF', '_JV_ID': 'J0000038H', '_CELL_SEQ_NO': '306455', 'ENODEB_ID': '521864', 'PCI': '311', 'TAC': '14528', 'RSI': '26', 'URA': '0', 'ENODEBNAME': '', '_PSEUDO_CARRIERS': '', '_BSC_C_NUMBER': '0', '_CISCO_BACKHAUL': '' }],
];

for (const [k, v] of groupMapping) {
  groupMap.set(k, v);
}

const filter = database.map(obj => {
  return Object
    .entries(obj)
    .reduce((acc, pair) => {
      const [key, value] = pair;
      if (this.groupMap.get(key) === 'SITE') {
        return { ...acc, [key]: value };
      }
    }, {});
});

function filterGroups(group) {
  // this.groups.forEach(group => {
  return this.result.map(obj => {
    return Object
      .entries(obj)
      .reduce((acc, pair) => {
        const [key, value] = pair;
        if (this.kudosMap.get(key) === group) {
          return { ...acc, [key]: value };
        } else {
          return { ...acc };
        }
      }, {});
  });
  // });
}
