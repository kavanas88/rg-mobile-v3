import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  isMainFormShown: boolean = true;
  isCreateAccOptionMenuShown: boolean = false;
  isEnterEmailShown: boolean = false;
  isPatientInfoShown: boolean = false;
  isPasswordInfoShown: boolean = false;
  isDateOfBirthShown: boolean = false;
  isTermsAndConditionsShown: boolean = false;
  isLoginFormShown: boolean = false;
  isPreferenceSelectionShown = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.isMainFormShown = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  onClickCreateAccount() {
    this.isMainFormShown = false;
    this.isCreateAccOptionMenuShown = true;
  }

  onClickOfSelection() {
    this.isCreateAccOptionMenuShown = false;
    this.isEnterEmailShown = true;
  }

  onClickSubmitEmail() {
    this.isEnterEmailShown = false;
    this.isPatientInfoShown = true;
  }

  onClickSubmitPatientName() {
    this.isPatientInfoShown = false;
    this.isPasswordInfoShown = true;
  }

  onClickSubmitPassword() {
    this.isPasswordInfoShown = false;
    this.isDateOfBirthShown = true;
  }

  onClickSubmitDOB() {
    this.isDateOfBirthShown = false;
    this.isTermsAndConditionsShown = true;
  }

  onClickAgree() {
    this.isTermsAndConditionsShown = false;
    this.isPreferenceSelectionShown = true;
  }

  onClickDisagree() {
    this.presentDialog('Message', "Thank you for visiting our Rare Genomics App.HIPAA data protection compliance requires for the user to accept our terms and conditions in order to use it");
  }

  onClickSignIn() {
    this.navCtrl.setRoot(HomePage);
  }

  onClickSkip() {
    this.isPreferenceSelectionShown = false;
    this.isLoginFormShown = true;
  }

  onClickNotify() {
    this.isPreferenceSelectionShown = false;
    this.isLoginFormShown = true;
  }

  goToLogin() {
    this.isLoginFormShown = true;
    this.isMainFormShown = false;
  }

  presentDialog(title: string, message: string) {
    let alert = this.alertCtrl.create({
      'title': title,
      'message': message,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: data => {
          this.isTermsAndConditionsShown = false;
          this.isMainFormShown = true;
        }
      }]
    });
    alert.present();
  }

}
