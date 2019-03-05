import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { HomePage } from '../home/home.page';
var routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: '',
                redirectTo: './tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
    },
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
export { TabsRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map