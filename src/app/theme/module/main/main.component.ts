

import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    template: `
        <top-bar></top-bar>
        <div class="router">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        top-bar {
            max-height: 49px;
            display: block;
            width: 100%;
            top: 0;
            position: fixed;
            z-index: 999;
            background-color: white;
        }

        .router {
            position: absolute;
            width: 100%;
            height: calc(100vh - 49px);
            margin-top: 49px;
        }
        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        ::-webkit-scrollbar-button {
            width: 14px;
            height: 14px;
        }
        ::-webkit-scrollbar-thumb {
            background: #e1e1e1;
            border: 21px none #ffffff;
            border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #ffffff;
        }
        ::-webkit-scrollbar-thumb:active {
            background: #ffffff;
        }
        ::-webkit-scrollbar-track {
            background: #727272;
            border: 19px none #ffffff;
            border-radius: 67px;
        }
        ::-webkit-scrollbar-track:hover {
            background: #727272;
        }
        ::-webkit-scrollbar-track:active {
            background: #727272;
        }
        ::-webkit-scrollbar-corner {
            background: transparent;
        }
    `
    ]
})

export class MainComponent  {

}


