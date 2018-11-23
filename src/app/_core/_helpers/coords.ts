import * as geodesy from 'geodesy';

// https://www.npmjs.com/package/geodesy


export const convertOsGrid2LatLon = (easting, northing) => {
  const OsGridRef = geodesy.OsGridRef;
  const gridref = new OsGridRef(easting, northing);
  return OsGridRef.osGridToLatLon(gridref);
};





