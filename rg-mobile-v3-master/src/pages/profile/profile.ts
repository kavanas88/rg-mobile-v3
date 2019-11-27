import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  doEdit: boolean = false;
  profileForm = {};
  profileView = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileView['name'] = "Sample Name";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfile() {
    this.doEdit = true;
  }

  cancelUpdate() {
    this.doEdit = false;
  }

}
