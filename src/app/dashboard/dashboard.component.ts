import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  algos: { number: number, name: string, question: string }[];
  problems: { number: number, problem: string, solution: string }[];

  constructor () {

    this.algos = [
      { number: 1, name: 'Classification', question: 'Is this A or B? [Limited number of answers]' },
      { number: 2, name: 'Anomoly', question: 'Is this wierd? [Change in Pattern]' },
      { number: 3, name: 'Regression', question: 'How much or how many? [Quantify]' },
      { number: 4, name: 'Clustering', question: 'How is this organised? [Grouping / Sorting] - E.g. Use for Traffic Site Density' },
      { number: 5, name: 'Reinforcement Learning', question: 'What should I do next? [Make decision,  based on past experiences]' }
    ];

    this.problems = [
      { number: 1, problem: 'Networks are complex. Changes on a technology layer impacts other layers. But how?', solution: 'ML can be trained to detect anomolous data' },
      { number: 2, problem: 'Where to deploy new infrastructure?', solution: 'ML can predict traffic growth / hotspots' },
      { number: 3, problem: 'Guided Optimisation', solution: '[Interference] Detection -> Predict optimisation (tilt / power)' },
      { number: 4, problem: 'Config Changes Tracking / disintegrated data', solution: 'Consolidate network changes to a central database that can update all users instantly' },
      { number: 5, problem: 'Multiple Excel Worksheets', solution: 'Consolidate workstreams to central location for better management' },
      { number: 6, problem: 'Model Tuning', solution: '... from drive test data ...' },
    ];
  }



  ngOnInit() {
  }

}
