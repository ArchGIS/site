

import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'upload-panel-form',
    templateUrl: `form.component.html`,
    styleUrls: ['form.component.scss'],
})

export class FormUploadPanelComponent {

    entities = [
        "Памятник",
        "Артефакт",
        "ОКН",
        "Радиоуглеродная датировка"
    ];
    filter: any;

}
