/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import { AppState } from './app.service';
import {TranslateService} from "../../theme/services/translate/translate.service";


@Component({
    selector: 'top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['top-bar.component.scss' ]
})
export class TopBarComponent {

    constructor(private _translate: TranslateService) {
        this.supportedLanguages = [
            {display: 'English', value: 'en', icon: 'assets/icon/ru.png'},
            {display: 'Русский', value: 'ru', icon: 'assets/icon/en.png'},
        ];
    }

    public listTopB: Array<{ link: string, label: string }> = [
        {
            link: 'info',
            label: 'Arch Gic'
        },
        {
            link: 'about',
            label: 'О системе'
        },
        {
            link: 'admin-panel',
            label: 'Админ панель'
        },
        {
            link: 'data-download',
            label: 'Загрузка данных'
        },
        {
            link: 'data-entry',
            label: 'Внесение данных'
        },
        {
            link: 'uploading-data',
            label: 'Выгрузка данных'
        },
        {
            link: 'sampling',
            label: 'Выборки'
        },
        {
            link: 'advanced-search',
            label: 'Расширенный поиск'
        },
        {
            link: 'quick-search',
            label: 'Быстрый поиск'
        },
        // {
        //     link: 'command',
        //     label: 'Команда'
        // },
        {
            link: 'personal-area',
            label: 'Личный кабинет'
        },
    ];

    public supportedLanguages: Array<{ display: string, value: string, icon: string }>;


}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
