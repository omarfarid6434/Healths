import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


public appMenu=[
  {title:'Home', url:'/test1',icon:'home'},
  {title:'Talk to a Doctor', url:'/test1',icon:'contact'},
  {title:'Find the Nearest', url:'/test1',icon:'locate'},
  {title:'Health Questions', url:'/test1',icon:'help'},
  {title:'My Consultation History', url:'/test1',icon:'document'},
  {title:'Doctor Appointment', url:'/test1',icon:'contacts'},
  {title:'My Policy', url:'/test1',icon:'contact'},
  {title:'Settings', url:'/test1',icon:'settings'},
  {title:'About Us', url:'/test1',icon:'information-circle-outline'}

];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
