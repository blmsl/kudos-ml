
import { headerMapping, kudosSiteMapping } from '../../_core/_models/user_defined_maps';
import * as Papa from 'papaparse';


export class ParseSiteData {

  private _fileObj;
  private parsedData = [];

  private userHdrMap = new Map();
  private kudosMap = new Map();

  private dupeBuckets = {};
  private buckets = {};

  papaSettings = {
    header: true,
    skipEmptyLines: true,
    fastMode: false,
    worker: false
  };

  private _groups = [
    ['sites', 'CUSTOM_SITE'],
    ['sectors', 'CUSTOM_SECTOR'],
    ['antennas', 'CUSTOM_ANTENNA'],
    ['cells', 'CUSTOM_CELL']
  ];


  constructor () {

    // Header Map User -> Kudos
    for (const [s, t] of headerMapping) {
      this.userHdrMap.set(s, t);
    }

    // Kudos Groups mapping
    for (const [h, g] of kudosSiteMapping) {
      this.kudosMap.set(h, g);
    }

  }


  parseCSV(file): Promise<any> {

    return new Promise((resolve, reject) => {

      // File object to parse
      this._fileObj = file;

      this.runPapa()
        .then((parsed) => {

          // RENAME KEYS
          this.parsedData = parsed.map(obj => {
            return Object
              .keys(obj)
              .reduce((acc, key) => {
                const renamedObj = { [this.userHdrMap.get(key) || key]: obj[key] };
                return { ...acc, ...renamedObj };
              }, {});
          });

          this.bucketGroups();

          this.removeDuplicates();

          resolve({
            result: true,
            data: this.buckets
          });

        }) // Then (runPapa)

        .catch((msg) => {
          // Papa Parse Error
          reject({
            result: false,
            data: msg
          });
        });

    });



  }


  private removeDuplicates() {

    const checkGroups = ['sites', 'sectors', 'antennas'];

    checkGroups.forEach(group => {
      const tmpArr = this.dupeBuckets[group];
      this.buckets[group] = tmpArr.filter((obj, index, self) =>
        index === self.findIndex((o) => (
          o._id === obj._id
        ))
      );
    });

    // Add Cells Group
    this.buckets['cells'] = this.dupeBuckets['cells'];

  }


  private bucketGroups() {

    this._groups.forEach(([primary, custom]) => {

      // Group fields  into buckets
      const customGroup = this.extractGroupData(custom);
      const primaryGroup = this.extractGroupData(primary);

      // Append Custom Data
      primaryGroup.forEach((p, index) => {
        p['_CUSTOM'] = customGroup[index];
      });

      this.dupeBuckets[primary] = primaryGroup;

    }); // For Each

  }


  private extractGroupData(group) {

    // Assign Id's
    const dataId = this.parsedData.map(obj => {

      const arr = [obj.SITE_ID, obj.SECTOR_ID, obj.ANTENNA_ID, obj.CELL_ID];

      let parentId;
      let keyId;

      switch (group) {
        case 'sites':
          parentId = 'root';
          keyId = arr.slice(0, 1).join('-');
          obj['_parent'] = parentId;
          obj['_id'] = keyId;
          break;

        case 'sectors':
          parentId = arr.slice(0, 1).join('-');
          keyId = arr.slice(0, 2).join('-');
          obj['_parent'] = parentId;
          obj['_id'] = keyId;
          break;

        case 'antennas':
          parentId = arr.slice(0, 2).join('-');
          keyId = arr.slice(0, 3).join('-');
          obj['_parent'] = parentId;
          obj['_id'] = keyId;
          break;

        case 'cells':
          parentId = arr.slice(0, 3).join('-');
          keyId = arr.slice(0, 4).join('-');
          obj['_parent'] = parentId;
          obj['_id'] = keyId;
          break;
      }

      return obj;
    });


    // Filter by Grouping
    return dataId.map(obj => {
      return Object
        .entries(obj)
        .reduce((acc, pair) => {
          const [key, value] = pair;
          if (this.kudosMap.get(key) === group || key === '_id' || key === '_parent') {
            return { ...acc, [key]: value }; // Add to group
          } else {
            return { ...acc }; // Skip
          }
        }, {}); // .reduce
    }); // .map

  }


  private runPapa(): Promise<any> {

    return new Promise((resolve, reject) => {

      Papa.parse(this._fileObj, {
        header: this.papaSettings.header,
        skipEmptyLines: this.papaSettings.skipEmptyLines,
        fastMode: this.papaSettings.fastMode,
        worker: this.papaSettings.worker,
        // transformHeader: (hdr) => {
        //   console.log(hdr);
        // },
        // step: ({ data, errors, meta }) => {
        //   errors.length < 1 ? this.parseStep$.next(data) : reject('Parsing Error');
        // },
        complete: ({ data, errors }) => {
          if (errors.length > 0) {
            reject(errors);
          } else {
            resolve(data);
          }
        }
      });
    });
  }

}
