/**
 * Created by nardm on 14.11.17.
 */

import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'monument-entry',
    template: `      
        <md-expansion-panel>
            <md-expansion-panel-header>
                <md-panel-title>
                    Памятник {{count}}
                </md-panel-title>
            </md-expansion-panel-header>
            <md-input-container style="width: 375px">
                <input mdInput
                       type="text"
                       required
                       placeholder="Выбрать существующий памятник">
            </md-input-container>
        </md-expansion-panel>
    `,
    styles: [`.form{
    }
    md-list-item{
        display: flex;
        justify-content: center;
    }
    h4{
        text-align: center;
    }
    `],
})

export class MonumentTemplateIComponent {

    @Input() count: number;
}



