/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';


@Component({
    selector: 'personal-area',
    templateUrl: 'personal-area.component.html',
    styleUrls: ['personal-area.component.scss']
})
export class PersonalAreaComponent {

    constructor() {

    }

    item: number = 1;


    links: [{id: number, name: string}] = [
        {id: 1, name: 'Личная информация'},
        {id: 2, name: 'Научная биография'},
        {id: 3, name: 'Мои памятники'},
        {id: 4, name: 'Мои исследования'},
        {id: 5, name: 'Мои отчеты'},
        {id: 6, name: 'Мои публикации'},
        {id: 7, name: 'Мои выборки '},
        {id: 8, name: 'Мои текущие исследования '},
        {id: 9, name: 'Мои коллеги'},
        {id: 10, name: 'Мои карты'},
        {id: 11, name: 'Мои инструменты'},
        {id: 12, name: 'Мои письма'},
    ];

    onSelect(link: number){
        debugger;
        this.item = link;
    }
}

