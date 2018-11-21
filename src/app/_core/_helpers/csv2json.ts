
import { BehaviorSubject } from 'rxjs';
import { headerMapping, kudosSiteMapping } from '../../_core/_models/user_defined_maps';
import * as Papa from 'papaparse';


export class ParseSiteData {

  private _fileObj;
  private parsedData = [];
  private parseStep$: BehaviorSubject<any> = new BehaviorSubject([]);

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

  private userHdrMap = new Map();
  private kudosMap = new Map();

  private _buckets = {};

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
            // To do after groupped
            console.log('BUCKETS', this._buckets);
          });

      }) // Then

      .catch((msg) => {
        console.error('Parse Error', msg);
      });

  }


  private bucketGroups(): Promise<any> {

    return new Promise((resolve, reject) => {


      this._groups.forEach(([primary, custom]) => {
        // Group fields  into buckets

        const customGroup = this.extractGroupData(custom);
        const primaryGroup = this.extractGroupData(primary);

        primaryGroup.forEach((p, index) => {
          p['_CUSTOM'] = customGroup[index];
        });

        // const uniKeys = [...(new Set(dupObj.map(({ id }) => id)))];
        // const unique = [new Set(grouped)];
        // console.log('Unique', group, unique);
        this._buckets[primary] = primaryGroup;

      }); // For Each
      resolve(); // Resolve Promise
    });
  }

  private extractGroupData(group) {
    return this.parsedData.map(obj => {
      return Object
        .entries(obj)
        .reduce((acc, pair) => {
          const [key, value] = pair;
          if (this.kudosMap.get(key) === group) {
            return { ...acc, [key]: value }; // Add to group
          } else {
            return { ...acc }; // Skip
          }
        }, {});
    }); // Map
  }


  private runPapa(): Promise<any> {

    console.log('Running PapaParse');

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
