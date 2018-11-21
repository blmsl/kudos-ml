
import { BehaviorSubject } from 'rxjs';
import { headerMapping, kudosSiteMapping } from '../../_core/_models/user_defined_maps';
import * as Papa from 'papaparse';


export class ParseSiteData {

  private _fileObj;
  private parsedData = [];
  private parseStep$: BehaviorSubject<any> = new BehaviorSubject([]);

  private userHdrMap = new Map();
  private kudosMap = new Map();

  private _buckets = {};

  papaSettings = {
    header: true,
    skipEmptyLines: true,
    fastMode: false,
    worker: false
  };

  private _groups = [
    ['SITE', 'CUSTOM_SITE'],
    ['SECTOR', 'CUSTOM_SECTOR'],
    ['ANTENNA', 'CUSTOM_ANTENNA'],
    ['CELL', 'CUSTOM_CELL']
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


  parseCSV(file) {

    // File object to parse
    this._fileObj = file;

    this.runPapa()
      .then((parsed) => {

        console.log('runPapa() RESOLVED', parsed);

        // RENAME KEYS
        this.parsedData = parsed.map(obj => {
          return Object
            .keys(obj)
            .reduce((acc, key) => {
              const renamedObj = { [this.userHdrMap.get(key) || key]: obj[key] };
              return { ...acc, ...renamedObj };
            }, {});
        });

        this.bucketGroups()
          .then(() => {
            // To do after grouped

            console.log('BUCKETS', this._buckets);

            this.removeDuplicates()
              .then(() => {
                console.log('UNIQUE', this._buckets);
              }); // Remove Duplicates

          }); // Then (bucketGroups)

      }) // Then (runPapa)

      .catch((msg) => {
        console.error('Parse Error', msg);
      });

  }


  private removeDuplicates(): Promise<any> {

    console.log('REMOVE DUPES');

    return new Promise((resolve) => {

      const tmp = Object(this._buckets);


      // this._buckets();

            // const uniKeys = [...(new Set(dupObj.map(({ id }) => id)))];
            // const unique = [new Set(grouped)];
            // console.log('Unique', group, unique);

      resolve();
     });

  }


  private bucketGroups(): Promise<any> {

    return new Promise((resolve, reject) => {


      this._groups.forEach(([primary, custom]) => {

        // Group fields  into buckets
        const customGroup = this.extractGroupData(custom);
        const primaryGroup = this.extractGroupData(primary);

        // Append Custom Data
        primaryGroup.forEach((p, index) => {
          p['_CUSTOM'] = customGroup[index];
        });

        this._buckets[primary] = primaryGroup;

      }); // For Each

      resolve(); // Resolve Promise

    });
  }

  private extractGroupData(group) {

    // Assign Id's
    const dataId = this.parsedData.map(obj => {

      const arr = [obj.SITE_ID, obj.SECTOR_ID, obj.ANTENNA_ID, obj.CELL_ID];

      let parentId;
      let keyId;

      switch (group) {
        case 'SITE':
          parentId = 'root';
          keyId = arr.slice(0, 1).join('-');
          break;

        case 'SECTOR':
          parentId = arr.slice(0, 1).join('-');
          keyId = arr.slice(0, 2).join('-');
          break;

        case 'ANTENNA':
          parentId = arr.slice(0, 2).join('-');
          keyId = arr.slice(0, 3).join('-');
          break;

        case 'CELL':
          parentId = arr.slice(0, 3).join('-');
          keyId = arr.slice(0, 4).join('-');
          break;
      }

      obj['parent'] = parentId;
      obj['id'] = keyId;

      return obj;
    });




    // Filter by Grouping
    const grp = dataId.map(obj => {
      return Object
        .entries(obj)
        .reduce((acc, pair) => {
          const [key, value] = pair;
          if (this.kudosMap.get(key) === group || key === 'id' || key === 'parent') {
            return { ...acc, [key]: value }; // Add to group
          } else {
            return { ...acc }; // Skip
          }
        }, {}); // .reduce
    }); // .map


    return grp;


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
