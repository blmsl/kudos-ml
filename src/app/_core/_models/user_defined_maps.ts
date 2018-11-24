const kudosSiteMapping = [
  ['CLUSTER_ID', 'sites'],
  ['AREA', 'sites'],
  ['CLUSTER_NAME', 'sites'],
  ['OPERATOR', 'sites'],
  ['REGION', 'sites'],
  ['_AREA_OP', 'CUSTOM_SITE'],
  ['_AREA_OWNER', 'CUSTOM_SITE'],
  ['OWNER', 'sites'],
  ['_MOBILE_OPTIMISER', 'CUSTOM_SITE'],
  ['_RADIOMANAGER', 'CUSTOM_SITE'],
  ['_MOBILE_RADIOMANAGER', 'CUSTOM_SITE'],
  ['SITE_ID', 'sites'],
  ['CELL_ID', 'cells'],
  ['SECTOR_ID', 'sectors'],
  ['CELL_REF', 'cells'],
  ['TECH_GEN', 'cells'],
  ['_BCF_INT_ID', 'CUSTOM_CELL'],
  ['_BTS_INT_ID', 'CUSTOM_CELL'],
  ['OSS_CELLID', 'cells'],
  ['LAYER', 'cells'],
  ['_MODEL_NAME', 'CUSTOM_CELL'],
  ['SITE_NAME', 'sites'],
  ['SITE_TYPE', 'sites'],
  ['CELL_TYPE', 'cells'],
  ['_MANUFACTURER', 'CUSTOM_CELL'],
  ['LAC', 'cells'],
  ['_NE_ID', 'CUSTOM_CELL'],
  ['_OMC_NE_NAME', 'CUSTOM_CELL'],
  ['_MSC', 'CUSTOM_CELL'],
  ['_OMC_ID', 'CUSTOM_CELL'],
  ['_CIRCUIT', 'CUSTOM_CELL'],
  ['_CELL_CARRIERS', 'CUSTOM_CELL'],
  ['ARFCN_1', 'cells'],
  ['_CALL_SAVER_CODE', 'CUSTOM_CELL'],
  ['_CELL_OF_ORIGIN', 'CUSTOM_CELL'],
  ['_ZONE_CODE', 'CUSTOM_CELL'],
  ['ADR1', 'sites'],
  ['ADR2', 'sites'],
  ['ADR3', 'sites'],
  ['TOWN', 'sites'],
  ['COUNTY', 'sites'],
  ['POSTCODE', 'sites'],
  ['EASTING', 'sites'],
  ['NORTHING', 'sites'],
  ['BCCH', 'cells'],
  ['ARFCN_2', 'cells'],
  ['TRX_LIST', 'cells'],
  ['NCC', 'cells'],
  ['BCC', 'cells'],
  ['PSC', 'cells'],
  ['SAC', 'cells'],
  ['RAC', 'cells'],
  ['TMA', 'antennas'],
  ['_ENVIRONMENT', 'CUSTOM_SECTOR'],
  ['_KIT_TYPE', 'CUSTOM_CELL'],
  ['_ANTENNA_NUM', 'sectors'],
  ['BEAMWIDTH_H', 'antennas'],
  ['ANTENNA_NAME', 'antennas'],
  ['ANTENNA_HEIGHT', 'antennas'],
  ['GROUND_HEIGHT', 'antennas'],
  ['TILT_MECH', 'antennas'],
  ['TILT_ELEC', 'antennas'],
  ['AZIMUTH', 'antennas'],
  ['TX_POWER', 'cells'],
  ['TX_LOSS', 'cells'],
  ['_AREA', 'CUSTOM_SITE'],
  ['_REGION_2', 'CUSTOM_SITE'],
  ['_BIS_DATE', 'CUSTOM_CELL'],
  ['_SITE_GENERATION_TYPE', 'CUSTOM_SECTOR'],
  ['_CELL_OWNER', 'CUSTOM_CELL'],
  ['_JV_ID', 'CUSTOM_SITE'],
  ['_CELL_SEQ_NO', 'CUSTOM_CELL'],
  ['ENODEB_ID', 'sectors'],
  ['PCI', 'cells'],
  ['TAC', 'cells'],
  ['RSI', 'cells'],
  ['URA', 'cells'],
  ['ENODEBNAME', 'sectors'],
  ['_PSEUDO_CARRIERS', 'CUSTOM_CELL'],
  ['_BSC_C_NUMBER', 'CUSTOM_CELL'],
  ['CISCO_BACKHAUL', 'CUSTOM_SITE']
];

const headerMapping = [
  ['UID', 'CLUSTER_ID'],
  ['POLYGON', 'AREA'],
  ['CHUNK', 'CLUSTER_NAME'],
  ['OPERATOR', 'OPERATOR'],
  ['REGION', 'REGION'],
  ['AREA_OP', '_AREA_OP'],
  ['AREA_OWNER', '_AREA_OWNER'],
  ['Optimiser', 'OWNER'],
  ['Mobile_Optimiser', '_MOBILE_OPTIMISER'],
  ['RadioManager', '_RADIOMANAGER'],
  ['Mobile_RadioManager', '_MOBILE_RADIOMANAGER'],
  ['CSR', 'SITE_ID'],
  ['CELL_ID', 'CELL_ID'],
  ['SECTOR', 'SECTOR_ID'],
  ['MI_MYCOM_ID', 'CELL_REF'],
  ['GENERATION', 'TECH_GEN'],
  ['BCF_INT_ID', '_BCF_INT_ID'],
  ['BTS_INT_ID', '_BTS_INT_ID'],
  ['WCEL_ID', 'OSS_CELLID'],
  ['FDD', 'LAYER'],
  ['MODEL_NAME', '_MODEL_NAME'],
  ['SITE_NAME', 'SITE_NAME'],
  ['SITE_TYPE', 'SITE_TYPE'],
  ['CELL_TYPE', 'CELL_TYPE'],
  ['MANUFACTURER', '_MANUFACTURER'],
  ['LACOD', 'LAC'],
  ['NE_ID', '_NE_ID'],
  ['OMC_NE_NAME', '_OMC_NE_NAME'],
  ['MSC', '_MSC'],
  ['OMC_ID', '_OMC_ID'],
  ['CIRCUIT', '_CIRCUIT'],
  ['CELL_CARRIERS', '_CELL_CARRIERS'],
  ['CELL_3G_CARRIER', 'ARFCN_1'],
  ['CALL_SAVER_CODE', '_CALL_SAVER_CODE'],
  ['CELL_OF_ORIGIN', '_CELL_OF_ORIGIN'],
  ['ZONE_CODE', '_ZONE_CODE'],
  ['ADR1', 'ADR1'],
  ['ADR2', 'ADR2'],
  ['ADR3', 'ADR3'],
  ['TOWN', 'TOWN'],
  ['COUNTY', 'COUNTY'],
  ['POSTCODE', 'POSTCODE'],
  ['EASTING', 'EASTING'],
  ['NORTHING', 'NORTHING'],
  ['BCCH', 'BCCH'],
  ['ARFCN', 'ARFCN_2'],
  ['TRX_LIST', 'TRX_LIST'],
  ['NCC', 'NCC'],
  ['BCC', 'BCC'],
  ['SCC', 'PSC'],
  ['SAC', 'SAC'],
  ['RAC', 'RAC'],
  ['TMA', '_TMA'],
  ['ENVIRONMENT', '_ENVIRONMENT'],
  ['KIT_TYPE', '_KIT_TYPE'],
  ['ANTENNA_NUM', '_ANTENNA_NUM'],
  ['BEAM_WIDTH', 'BEAMWIDTH_H'],
  ['ANT_NAME', 'ANTENNA_NAME'],
  ['ANT_HEIGHT', 'ANTENNA_HEIGHT'],
  ['GROUND_HEIGHT', 'GROUND_HEIGHT'],
  ['TILT', 'TILT_MECH'],
  ['ELEC_TILT', 'TILT_ELEC'],
  ['AZIMUTH', 'AZIMUTH'],
  ['POWER', 'TX_POWER'],
  ['LOSSES', 'TX_LOSS'],
  ['AREA', '_AREA'],
  ['REGION_2', '_REGION_2'],
  ['BIS_DATE', '_BIS_DATE'],
  ['SITE_GENERATION_TYPE', '_SITE_GENERATION_TYPE'],
  ['CELL_OWNER', '_CELL_OWNER'],
  ['JV_ID', '_JV_ID'],
  ['CELL_SEQ_NO', '_CELL_SEQ_NO'],
  ['ENODEB_ID', 'ENODEB_ID'],
  ['PCI', 'PCI'],
  ['TAC', 'TAC'],
  ['RSI', 'RSI'],
  ['URA', 'URA'],
  ['ENODEBNAME', 'ENODEBNAME'],
  ['PSEUDO_CARRIERS', '_PSEUDO_CARRIERS'],
  ['BSC_C_NUMBER', '_BSC_C_NUMBER'],
  ['CISCO_BACKHAUL', '_CISCO_BACKHAUL']
];


export { headerMapping, kudosSiteMapping };

