import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit {

  TREE_DATA = JSON.stringify({
    Applications: {
      Calendar: 'app',
      Chrome: 'app',
      Webstorm: 'app'
    },
    Documents: {
      angular: {
        src: {
          compiler: 'ts',
          core: 'ts'
        }
      },
      material2: {
        src: {
          button: 'ts',
          checkbox: 'ts',
          input: 'ts'
        }
      }
    },
    Downloads: {
      October: 'pdf',
      November: 'pdf',
      Tutorial: 'html'
    },
    Pictures: {
      'Photo Booth Library': {
        Contents: 'dir',
        Pictures: 'dir'
      },
      Sun: 'png',
      Woods: 'jpg'
    }
  });

  constructor() {
    console.log(this.TREE_DATA );
   }

  ngOnInit() {
  }

}
