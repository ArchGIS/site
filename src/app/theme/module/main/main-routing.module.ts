
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { MainComponent} from "./main.component";
import {AboutComponent} from "../../components/about/about.component";
import {MainCountComponent} from "../../components/main/main.component";
import {PersonalAreaComponent} from "../../components/personal-area/personal-area.component";
import {DialogInputComponent} from "../../components/personal-area/dialog-input/dialog-input.component";
import {AddDissertationComponent} from "../../components/personal-area/add-dissertation/add-dissertation.component";


const MainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: '',
                //canActivateChild: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: MainCountComponent
                    },
                    {
                        path: 'about',
                        component: AboutComponent
                    },
                    {
                        path: 'info',
                        component: MainCountComponent
                    },
                    {
                        path: 'admin-panel',
                        loadChildren: 'app/theme/module/admin-panel/admin-panel.module#AdminPanelModule',
                    },
                    {
                        path: 'data-download',
                        loadChildren: 'app/theme/module/data-download/data-download.module#DataDownlandModule',
                    },
                    {
                        path: 'data-entry',
                        loadChildren: 'app/theme/module/data-entry/data-entry.module#DataEntryModule',
                    },
                    {
                        path: 'uploading-data',
                        loadChildren: 'app/theme/module/uploading-data/uploading-data.module#UploadingDataModule',
                    },
                    {
                        path: 'sampling',
                        loadChildren: 'app/theme/module/sampling/sampling.module#SamplingModule',
                    },
                    {
                        path: 'advanced-search',
                        loadChildren: 'app/theme/module/advanced-search/advanced-search.module#AdvancedSearchModule',
                    },
                    {
                        path: 'quick-search',
                        loadChildren: 'app/theme/module/quick-search/quick-search.module#QuickSearchModule',
                    },
                    {
                        path: 'command',
                        loadChildren: 'app/theme/module/command/command.module#CommandModule',
                    },
                    {
                        path: 'personal-area',
                        component: PersonalAreaComponent,
                    },
                    {
                        path: 'dialog-input',
                        component: DialogInputComponent,
                    },
                    {
                        path: 'add-dissertation',
                        component: AddDissertationComponent,
                    },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(MainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {}


