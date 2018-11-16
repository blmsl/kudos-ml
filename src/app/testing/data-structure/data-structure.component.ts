import { Component, OnInit } from '@angular/core';
import { MockData } from '../../_core/_mock/_mock_site_data';
// import { tefMap } from '../../_core/_models/user_defined_maps';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss']
})
export class DataStructureComponent implements OnInit {

  input;
  output;
  // dmap = tefMap;
  dmap = new Map([
    // userDef, [kudosDef, Group]
    ['name', [ 'FIRSTNAME', 'Cell' ]],
    ['location', ['CITY', '']],
  ]);

  dmapObj = [
    { user: 'name', kudos: 'newname', group: 'Cells' },
    {user: 'name2', kudos: 'newname2', group: 'Sites'}
  ];

  constructor () {
    this.input = MockData.ex3;
  }

  ngOnInit() {
  }

  run() {
    console.log('Start');
    // this.output = this.dmap.entries();
    // console.log(this.dmap.keys());
    const test = { name: 'JAMIE', surname: 'Worsfold', location: 'London', age: 43 };
    // const new1 = this.renameProp('name', 'forename', test);
    const new2 = this.renameKeys({ 'surname': 'LASTNAME', 'name': 'FIRSTNAME' }, test);

    console.log(['old', test], ['new2', new2]);
  }

  renameKeys = (keysMap, obj) => {

    // Usage
    //   renameKeys({
    //     name: 'firstName',
    //     job: 'passion'
    // }, {
    //     name: 'Bobo',
    //     job: 'Front-End Master'
    // });

    // debugger;

    return Object
      .keys(obj)
      .reduce((acc, key) => {
        // debugger;

        const renamedObject = {
          [keysMap[key] || key]: obj[key]
        };

        // debugger;

        return {
          ...acc,
          ...renamedObject
        };
      }, {});
  }


  renameProp = (oldProp, newProp, { [oldProp]: oldVal, ...others }) => ({
    [newProp]: oldVal,
    ...others
  })

}
