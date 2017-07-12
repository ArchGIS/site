/**
 * Created by nardm on 11.07.17.
 */

import {
    Component,
} from '@angular/core';
import { AppState } from './app.service';
import {TranslateService} from "../../theme/services/translate/translate.service";


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['src/app/pages/login/login.component.scss' ]
})
export class LoginComponent {

    constructor(private _translate: TranslateService) {
        this.supportedLanguages = [
            {display: 'English', value: 'en'},
            {display: 'Русский', value: 'ru'},
        ];
    }

    public listTopB: Array<{ link: string, label: string }> = [
        {
            link: '',
            label: 'Arch Gic'
        },
        {
            link: 'about',
            label: 'О системе'
        },
        {
            link: '',
            label: 'Административная панель'
        },
        {
            link: '',
            label: 'Загрузка данных'
        },
        {
            link: '',
            label: 'Внесение данных'
        },
        {
            link: '',
            label: 'Выгрузка данных'
        },
        {
            link: '',
            label: 'Выборки'
        },
        {
            link: '',
            label: 'Расширенный поиск'
        },
        {
            link: '',
            label: 'Быстрый поиск'
        },
        {
            link: '',
            label: 'Команда'
        },
    ];

    public supportedLanguages: Array<{ display: string, value: string }>;

    public selectLang(lang: string) {
        this._translate.use(lang);
    }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
