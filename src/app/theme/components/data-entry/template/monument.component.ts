/**
 * Created by nardm on 14.11.17.
 */

import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'monument-entry',
    template: `
        <div class="form">
            <h4>Сведения о памятнике</h4>
            <md-list style="    margin-top: -50px;">
                <md-list-item style=" display: flex; justify-content: center;">
                    <md-input-container style="width: 375px">
                        <input mdInput
                               type="text"
                               required
                               placeholder="Выбрать существующий памятник">
                    </md-input-container>
                </md-list-item>
            </md-list>
        </div>
    `,
    styles: [`.form{
        min-height: 25vw;
    }
    md-list-item{
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
    h4{
        text-align: center;
    }
    `],
})

export class MonumentTemplateIComponent {


}



