import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jcldetails',
  templateUrl: './jcldetails.component.html',
  styleUrls: ['./jcldetails.component.css',]
})
export class JCLDetailsComponent implements OnInit {
  JCLName:string ="E15W011N";
  program:any[] = [
    {
      "stepName":"STEP01",
      "programName":"T21P011K",
      "inputDSN":"S1InputDSN1",
      "outputDSN":"S1OutputDSN1",
      "controlCard":"T21C011K",
      "xcom":"N",
      "email":"N"
    },
    {
      "stepName":"STEP01",
      "programName":"T21P011K",
      "inputDSN":"S1InputDSN2",
      "outputDSN":"S1OutputDSN2",
      "controlCard":"T21C011K",
      "xcom":"N",
      "email":"N"
    },
    {
      "stepName":"STEP01",
      "programName":"T21P011K",
      "inputDSN":"S1InputDSN3",
      "outputDSN":" ",
      "controlCard":"T21C011K",
      "xcom":"N",
      "email":"N"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
