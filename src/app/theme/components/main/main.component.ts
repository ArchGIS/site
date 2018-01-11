/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import {TranslateService} from "ng2-translate";
import {CountItem, MainService} from "../../services/main/main.service";


@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainCountComponent {

    constructor(private service: MainService) {
        this.getMainCount();
    }


    private getMainCount(): void {
        this.service.getMainCount()
            .then(res => {
                this.list = res.counts;
            })
    }


    list: CountItem[];
}

