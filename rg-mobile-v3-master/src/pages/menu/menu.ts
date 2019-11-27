import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  isRareShareShown = false;
  isRareReachShown = false;
  isContactUsShown = false;
  isTermsConditionsShown = false;
  isPrivacyPolicyShown = false;
  isMySettingsShown = false;
  isSupportAndFeedbackShown = false;
  isHelpCenterShown = false;
  screenTitle: string;
  contactForm: FormGroup;
  submitAttempt: boolean = false;

  private shownGroup = null;
    public frequentlyAskedQuestions = [{
            question: 'What happens if I don’t turn on the Mood feedback?',
            answer: 'By default,the Mood feedback is turned ON while signing up for an account. ' +
                    'This feedback is important to monitor the patient’s progress with the treatment.More enhancements ' +
                    'to the mood tracker will be implemented in future releases along with symptoms tracker where patients ' +
                    'can add symptoms that they experience during onset or the course of the treatment and it is tracked on a ' +
                    'regular basis. It’s important that the everyday mood of the patient is recorded so that capturing the mood ' +
                    'will give a good platform for analysing the patient’s reaction to the course of treatment they undertake. ' +
                    'Turning the mood feedback feature OFF will not give sufficient information for analysing and helping the ' +
                    'patient with more suggestions/information.'
        },{
            question: 'What is Hope Circle?',
            answer: 'Hope circle is a network of people/organisation that the patient would like to add to their list. ' +
                    'this circle of hope is composed by every key player on the patient’s path to cure. The key players can ' +
                    'be close friends, other groups of Patients, the Patient’s physicians, geneticist, other medical specialist, ' +
                    'clinical treatment development specialist (analysts, researchers) or other supporting organization’s ' +
                    'contact details for quick access by the patient. This network stands as a symbol of hope to what the ' +
                    'patient is going through, emotionally and physically. Every key member of the Circle of Hope plays N ' +
                    'important role to push forward and accelerates the search path for a cure.'
        },{
            question: 'What does the medication tracker do?',
            answer: 'The medication tracker is a feature provided, to enable the patient to maintain easily the medication ' +
                    'details and track proper intake of the appropriate dosage of prescribed medications by means of reminders ' +
                    'at various time intervals. The main objective of this feature is ensuring treatment adherence.'
        },{
            question: 'What is the purpose of Calendar/Scheduler?',
            answer: 'The objective of this function is to schedule appointments with the patient’s  physicians, or their ' +
                    'multiple appointments if they participate on a clinical trial. To participate on a clinical trial requires ' +
                    'a certain frequency of visits to the clinicians, follow ups and monitoring the patient’s evolution during ' +
                    'testing a treatment in clinical trial stage.'
        },{
            question: 'What is the purpose of Rare REACH?',
            answer: 'Rare reach is aimed to educate and guide the patients and their families about the unknown process a ' +
                    'patient has to go through, when DNA analysis is recommended. This feature is build as a slideshow with ' +
                    'pictures, for easy reading and comprehension.'
        },{
            question: 'What Donating my health data implies?',
            answer: 'Donating health data refers to accepting to donate the health information of the patient for research ' +
                    'and science purposes. The data donation is anonymized and de-identified before being donated, only ' +
                    'relevant data for medical and clinical purposes is shared.'
        },{
            question: 'Is my personal private information secured and protected?',
            answer: 'We are implementing HIPAA compliance internal processes to ensure the patient’s personal information ' +
                    'will be kept protected, secured and confidential.'
        },{
            question: 'How can I reset the password?',
            answer: 'The user’s pasword can be reset by clicking on “forgot password” button. A reset link will be sent to the ' +
                    'user’s registered e-mail id.'
        },{
            question: 'Why should I enter my “date of birth” (DOB) as a caregiver instead of the patient’s during sign up?',
            answer: 'The account is relevant for the user, irrespective of whether it is a patient or a caregiver.To secure ' +
                    'the account and restrict one user creating multiple accounts, the date of birth and email id of the ' +
                    'account creator plays the role of unique identifiers.'
        },{
            question: 'Can a caregiver have more than one patient?',
            answer: 'The Caregiver is associated to a patient who is under 18 or a patient above 18 with special needs. One ' +
                    'caregiver is associated with one patient for this release. Feature updates to include caregiver ' +
                    'associated with more than one patient will be handled in future releases.'
        },{
            question: 'How can I contact Rare Genomics?',
            answer: 'By clicking on the General Menu on the top navigation bar, the option “Contact Us” will guide you to ' +
                    'express your interest or queries to Rare Genomics.'
    }];

  settings = {};
  mood: any;
  pnPermission;
  FIDPermission;
  CGPermission;
  CGUsername;
  CGPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.resetVariables();
    switch (navParams.get('pageIndex')) {
      case 1:
              this.isRareShareShown = true;
              this.screenTitle = "Rare Share";
              break;
      case 2:
              this.isRareReachShown = true;
              this.screenTitle = "Rare Reach";
              break;
      case 3:
              this.isContactUsShown = true;
              this.screenTitle = "Contact Us";
              this.contactFormGroupValidations();
              break;
      case 4:
              this.isTermsConditionsShown = true;
              this.screenTitle = "Terms and Conditions";
              break;
      case 5:
              this.isPrivacyPolicyShown = true;
              this.screenTitle = "Privacy Policy";
              break;
      case 6:
              this.isMySettingsShown = true;
              this.screenTitle = "My Settings";
              break;
      case 7:
              this.isSupportAndFeedbackShown = true;
              this.screenTitle = "Support and Feedback";
              break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
  }

  resetVariables() {
    this.isRareShareShown = false;
    this.isRareReachShown = false;
    this.isContactUsShown = false;
    this.isTermsConditionsShown = false;
    this.isPrivacyPolicyShown = false;
    this.isMySettingsShown = false;
    this.isSupportAndFeedbackShown = false;
    this.isHelpCenterShown = false;
  }

  closeWindow() {
    this.navCtrl.pop();;
  }

  contactFormGroupValidations() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      description: [''],
      interest: ['']
    });
  }

  validate(): boolean {
    if (this.contactForm.valid) {
      return true;
    }

    // figure out the error message
    let errorMsg = '';

    // validate each field
    let fName = this.contactForm.controls['firstName'];
    let lName = this.contactForm.controls['lastName'];
    let mail = this.contactForm.controls['email'];

    console.log(fName.valid);
    console.log(lName);
    console.log(mail);

    if (!(fName.valid) || !(lName.valid) || !(mail.valid)) {
      errorMsg = 'Please enter details on Mandatory fields';
      // if ((fName.errors['required'])) {
      //   errorMsg = 'Please enter details on Mandatory fields';
      // } else if ((fName.errors['pattern']) || (lName.errors['pattern']) || (mail.errors['pattern'])) {
      //   errorMsg = 'Please enter valid data on Mandatory fields';
      // }
    }

    let alert = this.alertCtrl.create({
      subTitle: errorMsg || '!',
      buttons: ['OK']
    });
    alert.present();

    return false;
  }

submitContactInfo() {
  this.submitAttempt = true

  if(this.validate()) {
    let alert = this.alertCtrl.create({
      message: 'Thank you for contacting us!Depending on your interests,we\'ll contact you shortly!.<br/>Sincerely,<br/>Your Raregenomics Team',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}

emailComposerWindow() {
 console.log('email Composer');
}

helpCenterWindow() {
  this.resetVariables();
  this.isHelpCenterShown = true;
  this.screenTitle = "Help Center";
}

toggleGroup(group) {
  if (this.isGroupShown(group)) {
      this.shownGroup = null;
  } else {
      this.shownGroup = group;
  }
}

isGroupShown(group) {
  return this.shownGroup === group;
}

updateNotifications(value){
  this.settings['notifications'] = value['notifications'];
}

updateReminderTime(value){
  this.settings['reminderTime'] = value['reminderTime'];
}


setMoodFeedback(value){
  this.settings['moodfeedback'] = value['moodfeedback'];
}

setDonateHealthData(value){
  this.settings['donatehealthdata'] = value['donatehealthdata'];
}

callModalScreen(value){
    // let modal = this.modalCtrl.create(MoodFeedbackPage, this.settings);
    // modal.present();
}

provideCGAccess(isChecked) {

  console.log('&&&&&&&&&&&' + isChecked);
  // if(isChecked)
  // {
  //   this.CGUsername.readonly = false;
  //   this.CGPassword.readonly = false;
  // }

}


}
