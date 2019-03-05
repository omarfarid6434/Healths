import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appMenu = [
            { title: 'Home', url: '/test1', icon: 'home' },
            { title: 'Talk to a Doctor', url: '/test1', icon: 'contact' },
            { title: 'Find the Nearest', url: '/test1', icon: 'locate' },
            { title: 'Health Questions', url: '/test1', icon: 'help' },
            { title: 'My Consultation History', url: '/test1', icon: 'document' },
            { title: 'Doctor Appointment', url: '/test1', icon: 'contacts' },
            { title: 'My Policy', url: '/test1', icon: 'contact' },
            { title: 'Settings', url: '/test1', icon: 'settings' },
            { title: 'About Us', url: '/test1', icon: 'information-circle-outline' }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map