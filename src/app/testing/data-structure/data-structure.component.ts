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
    ['aa', 'AA'],
    ['ab', 'AB'],
    ['ac', 'AC'],
  ]);

  constructor () {
    this.input = MockData.ex3;
   }

  ngOnInit() {
  }

  run() {
    console.log('Start');
    // this.output = this.dmap.entries();
    // console.log(this.dmap.keys());
  }

}
