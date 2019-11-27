import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController

  rootPage:any = MainPage;

  pages: Array<{ index: number, title: string, component: any }>;
  rgiMenuItems: Array<{ index: number, title: string, component: any }>;
  settingsMenuItems: Array<{ index: number, title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { index: 0, title: 'My Profile', component: ProfilePage },
      { index: 1, title: 'Rareshare', component: MenuPage },
      { index: 2, title: 'Get a Diagnosis - RareREACH', component: MenuPage }
    ];

    this.rgiMenuItems = [
      //As discussed with Bea, commenting out the unnecessary items from the more menu.
      // { title: 'Who we are?', component: RarereachPage },
      // { title: 'Rare Genomics FAQs', component: RarereachPage },
      // { title: 'Get RGI\'s Newsletter', component: RarereachPage },
      { index: 3, title: 'Contact Us.', component: MenuPage }
    ];

    this.settingsMenuItems = [
      { index: 4, title: 'Terms and Conditions', component: MenuPage },
      { index: 5, title: 'Privacy Policy', component: MenuPage },//please add a PrivacyPolicyPage Commponent
      { index: 6, title: 'My Settings', component: MenuPage },
      { index: 7, title: 'Support & Feedback', component: MenuPage }
    ];
  }

  openPage(page) {
    this.nav.push(page.component, {
      pageIndex: page.index
    });
  }

  signOut() {
    let alert = this.alertCtrl.create({
      message: 'You have now been signed out of the app.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.nav.setRoot(MainPage);
          }
        }
      ]
    });
    alert.present();
  }
}

