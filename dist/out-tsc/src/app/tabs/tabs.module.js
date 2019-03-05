import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib_1.__decorate([
        NgModule({
            declarations: [TabsComponent],
            imports: [
                CommonModule,
                TabsRoutingModule
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
export { TabsModule };
//# sourceMappingURL=tabs.module.js.map