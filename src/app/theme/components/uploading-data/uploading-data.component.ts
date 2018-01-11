

import { Component, OnInit } from "@angular/core";
import {Http} from "@angular/http";

@Component({
  templateUrl: 'uploading-data.component.html',
  styleUrls: ['uploading-data.component.scss'],
})

export class UploadingDataIComponent {

  essences = [
    {
      id: 1,
      name: 'Памятник',
    },
    {
      id: 2,
      name: 'Артефакт',
    },
    {
      id: 5,
      name: 'ОКН',
    },
    {
      id: 7,
      name: 'Радиоуглеродная датировка',
    },
  ]

}
