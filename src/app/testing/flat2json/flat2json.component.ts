import { Component, OnInit } from '@angular/core';
import { MockData } from '../../_core/_mock/_mock_site_data';

@Component({
  selector: 'app-flat2json',
  templateUrl: './flat2json.component.html',
  styleUrls: ['./flat2json.component.scss']
})
export class Flat2jsonComponent implements OnInit {


  ex1 = MockData.ex1;
  ex2 = MockData.ex2;
  ex3 = MockData.ex3;



  result1;
  result2;
  result3;

  constructor () { }

  ngOnInit() {
    this.result1 = this.convert(this.ex1);
    this.result2 = this.convert(this.ex2);
    this.result3 = this.convert(this.ex3);

    // const { grp31, grp21, grp11, ...others } = this.ex2[0];

    // console.log('Group 1', grp11);
    // console.log('Group 2', grp21);
    // console.log('Group 3', grp31);
    // console.log('REST', others);

    const test = { 'UID': '215', 'POLYGON': 'M25_South', 'CHUNK': 'M25_South_IL_Camden', 'OPERATOR': 'VF', 'REGION': 'London' };

    const { CHUNK, UID, ...remain  } = test;

    console.log('CHUNK', CHUNK);
    console.log('UID', UID);
    console.log('REST', remain);

    const { POLYGON, REGION, ...remain2 } = remain;

    console.log('POLYGON', POLYGON);
    console.log('REGION', REGION);
    console.log('REST2', remain2);
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
