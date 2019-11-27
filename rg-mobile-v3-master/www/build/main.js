webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.isMainFormShown = true;
        this.isCreateAccOptionMenuShown = false;
        this.isEnterEmailShown = false;
        this.isPatientInfoShown = false;
        this.isPasswordInfoShown = false;
        this.isDateOfBirthShown = false;
        this.isTermsAndConditionsShown = false;
        this.isLoginFormShown = false;
        this.isPreferenceSelectionShown = false;
        this.isMainFormShown = true;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.onClickCreateAccount = function () {
        this.isMainFormShown = false;
        this.isCreateAccOptionMenuShown = true;
    };
    MainPage.prototype.onClickOfSelection = function () {
        this.isCreateAccOptionMenuShown = false;
        this.isEnterEmailShown = true;
    };
    MainPage.prototype.onClickSubmitEmail = function () {
        this.isEnterEmailShown = false;
        this.isPatientInfoShown = true;
    };
    MainPage.prototype.onClickSubmitPatientName = function () {
        this.isPatientInfoShown = false;
        this.isPasswordInfoShown = true;
    };
    MainPage.prototype.onClickSubmitPassword = function () {
        this.isPasswordInfoShown = false;
        this.isDateOfBirthShown = true;
    };
    MainPage.prototype.onClickSubmitDOB = function () {
        this.isDateOfBirthShown = false;
        this.isTermsAndConditionsShown = true;
    };
    MainPage.prototype.onClickAgree = function () {
        this.isTermsAndConditionsShown = false;
        this.isPreferenceSelectionShown = true;
    };
    MainPage.prototype.onClickDisagree = function () {
        this.presentDialog('Message', "Thank you for visiting our Rare Genomics App.HIPAA data protection compliance requires for the user to accept our terms and conditions in order to use it");
    };
    MainPage.prototype.onClickSignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MainPage.prototype.onClickSkip = function () {
        this.isPreferenceSelectionShown = false;
        this.isLoginFormShown = true;
    };
    MainPage.prototype.onClickNotify = function () {
        this.isPreferenceSelectionShown = false;
        this.isLoginFormShown = true;
    };
    MainPage.prototype.goToLogin = function () {
        this.isLoginFormShown = true;
        this.isMainFormShown = false;
    };
    MainPage.prototype.presentDialog = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            'title': title,
            'message': message,
            buttons: [{
                    text: 'OK',
                    role: 'cancel',
                    handler: function (data) {
                        _this.isTermsAndConditionsShown = false;
                        _this.isMainFormShown = true;
                    }
                }]
        });
        alert.present();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/main/main.html"*/'<ion-header>\n  <ion-toolbar *ngIf="isTermsAndConditionsShown">\n    <ion-title style="text-align: center;">\n      Terms and Conditions\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar *ngIf="isPreferenceSelectionShown">\n    <ion-title style="text-align: center;">\n      My Preferences\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ng-container *ngIf="isMainFormShown">\n    <ion-grid>\n      <ion-row center justify-content-center align-items-center>\n        <img width="20%" src="assets/imgs/main/rg-logo.png">\n      </ion-row>\n      <ion-row center justify-content-center align-items-center>\n        <div style="margin-top: 10px;margin-bottom:10px;">\n          <div class="welcome-lbl">Welcome</div>\n          <div class="welcome-lbl">to</div>\n          <div class="welcome-lbl">Rare Genomics Institute</div>\n        </div>\n      </ion-row>\n      <!-- <ion-row center justify-content-center align-items-center>\n        <button class="facebook-login disable-hover" ion-button round block icon-left (click)="doAlert()">\n          <ion-icon name="logo-facebook"></ion-icon>Continue with Facebook</button>\n      </ion-row> -->\n      <ion-row center justify-content-center align-items-center>\n        <button class="create-account-btn disable-hover" ion-button full color="light" block (click)="onClickCreateAccount()">Create New Account</button>\n      </ion-row>\n      <ion-row center justify-content-center align-items-center>\n        <div class="already-account-lbl">Already have an account?</div>\n      </ion-row>\n      <ion-row center justify-content-center align-items-center>\n        <button class="login-btn disable-hover" ion-button outline block (click)="goToLogin()">Login </button>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isCreateAccOptionMenuShown">\n    <ion-grid style="width: 50%; position: relative; top: 10%;">\n      <ion-row center justify-content-center align-items-center>\n        <div class="selection-lbl">Please select from the options below:</div>\n      </ion-row>\n      <ion-row center justify-content-center align-items-center>\n        <ion-list>\n          <ion-item>\n            <ion-label>i\'m a patient.</ion-label>\n            <ion-checkbox [(ngModel)]="patient"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>I\'m a Caregiver representing patient with special needs.</ion-label>\n            <ion-checkbox [(ngModel)]="caregiver"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>I\'m a Caregiver representing patient under 18.</ion-label>\n            <ion-checkbox [(ngModel)]="caregiverUnder18"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-row>\n      <ion-row justify-content-end align-items-end style="margin-top: 10px;">\n        <button float-right ion-button icon-only round (click)="onClickOfSelection()">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isEnterEmailShown">\n    <ion-grid style="width: 50%; position: relative; top: 10%;">\n      <ion-row center justify-content-center align-items-center>\n        <div class="email-lbl">And, your email?</div>\n      </ion-row>\n      <ion-row>\n        <form name="emailForm">\n          <ion-item>\n            <ion-label stacked>Email Address</ion-label>\n            <ion-input required name="email" type="email" [(ngModel)]="email" text-lowercase></ion-input>\n          </ion-item>\n        </form>\n      </ion-row>\n      <ion-row justify-content-end align-items-end style="margin-top: 10px;">\n        <button float-right ion-button icon-only round (click)="onClickSubmitEmail()">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isPatientInfoShown">\n    <ion-grid style="width: 50%; position: relative; top: 10%;">\n      <ion-row center justify-content-center align-items-center>\n        <div class="email-lbl">What is the Patient\'s name?</div>\n      </ion-row>\n      <form name="patientNameForm">\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>First name</ion-label>\n            <ion-input required name="firstName" type="text" [(ngModel)]="firstName" text-lowercase></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>Last Name</ion-label>\n            <ion-input required name="lastName" type="text" [(ngModel)]="lastName" text-lowercase></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-end align-items-end style="margin-top: 10px;">\n          <button class="submit-patient-name-btn disable-hover" ion-button full block (click)="onClickSubmitPatientName()">Submit</button>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isPasswordInfoShown">\n    <ion-grid style="width: 50%; position: relative; top: 10%;">\n      <ion-row>\n        <div class="pwd-lbl">Create a Password</div>\n      </ion-row>\n      <ion-row>\n        <div class="pwd-subHeader-text">Password must be at least 8 characters and they must include at least one capital letter and one number or special\n          character\n        </div>\n      </ion-row>\n      <form name="passwordForm">\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input required name="pwd" type="password" [(ngModel)]="pwd" text-lowercase></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>Confirm password</ion-label>\n            <ion-input required name="confirmPwd" type="password" [(ngModel)]="confirmPwd" text-lowercase></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-end align-items-end style="margin-top: 10px;">\n          <button float-right ion-button icon-only round (click)="onClickSubmitPassword()">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isDateOfBirthShown">\n    <ion-grid style="width: 50%; position: relative; top: 10%;">\n      <ion-row>\n        <div class="pwd-lbl">When is your Birthday?</div>\n      </ion-row>\n      <ion-row>\n        <div class="pwd-subHeader-text">You must be at least 18 years old to use Rare Genomics. Other people won\'t see your birthday.</div>\n      </ion-row>\n      <ion-row>\n        <form name="dobForm">\n          <ion-item>\n            <ion-label stacked>Email Address</ion-label>\n            <ion-input required name="dob" type="date" [(ngModel)]="dob" text-lowercase></ion-input>\n          </ion-item>\n        </form>\n      </ion-row>\n      <ion-row justify-content-end align-items-end style="margin-top: 10px;">\n        <button float-right ion-button icon-only round (click)="onClickSubmitDOB()">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isTermsAndConditionsShown">\n    <b>Terms of Service</b>\n    <br>\n    <b>Revision date October 27, 2016</b>\n    <br>\n    <br>\n\n    <b>Effective date May 16, 2008</b>\n    <br>\n    <br> Welcome to RareShare.org ("RG Patient’s App")! We are built on a premise that sharing information is good, especially\n    when it comes to information about rare diseases. The more you share the more you have an opportunity to help others\n    whose lives have been touched by rare disease. Since rare diseases are not common, they are also often not well understood.\n    By joining our community of support and sharing information about your experience, you will help others, including researchers,\n    better understand your disease.\n    <br>\n    <br> Below are the Terms of Service, and in the right column, you will find a summary that will help you understand these\n    terms, although the summary is not legally binding.\n    <br>\n    <br> The following terms constitute an agreement between you and Rare Genomics Institute, Inc. (“Rare Genomics” or “we” or\n    “us”) the operator of RareShare. RareShare, described below, provides users with a wide array of services including,\n    without limitation, news, reference resources, personalized content, and communication platforms (collectively, the "Services").\n    The Services are provided to users of RareShare subject to the following Terms of Service (the "Terms"), the most current\n    version of which is located at the bottom of any page of RareShare. By using the Services, you the user (“user” or “you”)\n    agree to these Terms, whether or not you are a registered member of RareShare or just a casual visitor. These Terms govern\n    your use of the Services and create a binding legal agreement that we may enforce against you in the event of a violation.\n    If you do not agree to all of these Terms of Service, do not use the Services. To the extent you register with RareShare\n    as a member, then in addition to the terms that are applicable to all users of RareShare, the terms that apply only to\n    members shall apply to you too as well.\n    <br>\n    <br>\n\n    <b>Account Registration</b>\n    <br>\n    <br> You must register an account with RareShare to access all of the Services. Registration requires you to provide us with\n    information about yourself, which include your name, birthdate, gender, picture, email address, profession, relationship\n    to a rare disease patient, country, state, city, zip code, home community, a statement about yourself, your website URL,\n    your blog URL, and other information specified in the registration form ("Registration Information"), and to select a\n    username and password that will be associated with your account. You agree that your Registration Information is true,\n    accurate, current, and complete, and you will promptly update your Registration Information as necessary so that it continues\n    to be true, accurate, current and complete. We may attempt to verify the accuracy of the Registration Information that\n    you have provided and update it as necessary. All members represent and warrant that the information they provided when\n    registering as a member, and all information that they subsequently provide regarding themselves and their membership,\n    is true and accurate and not misleading.\n    <br>\n    <br>\n\n    <b>Protection and Use of Your Membership Password and Login</b>\n    <br>\n    <br> You are solely responsible for maintaining the confidentiality and security of your RareShare account username and password\n    and you may not permit another person to use your username and password to access the Services. You are solely responsible\n    for the control of your account access information and all activity that occurs under your account. If you believe that\n    the security of your account information has been compromised, you should immediately change your username and password\n    through the account settings feature or notify us at info@rareshare.org and we will assist you. You grant Rare Genomics\n    and all other persons or entities involved in the operation of RareShare the right to transmit, monitor, retrieve, store,\n    and use your information in connection with the operation of RareShare. Rare Genomics cannot and does not assume any\n    responsibility or liability for any information you submit, or your or third parties\' use or misuse of information transmitted\n    or received using RareShare tools and services. Rare Genomics shall have no liability for any unauthorized access to\n    or use of your account information.\n    <br>\n    <br>\n\n    <b>Restrictions on Eligibility</b>\n    <br>\n    <br> With your use of RareShare, you consent to the terms contained in this policy. If you do not consent to all of the terms\n    in these Terms of Service and Privacy Policy, you must not use RareShare. International users that do not agree with\n    the Privacy Policy and/or children under the age of 13 must not use RareShare.\n    <br>\n    <br>\n\n    <b>RareShare Does Not Provide Medical Advice</b>\n    <br>\n    <br> The contents of the RareShare, such as text, graphics, images, information obtained from RareShare affiliates or licensors,\n    and other material contained on RareShare, including information posted by users ("Content") are for informational purposes\n    only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always\n    seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical\n    condition. Never disregard professional medical advice or delay in seeking it because of something you have read on RareShare!\n    <br>\n    <br> If you think you may have a medical emergency, call your doctor or 911 immediately. Rare Genomics does not recommend\n    or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned\n    on RareShare\n    <br>\n    <br>\n\n    <b>User Assumption of Risk</b>\n    <br>\n    <br> Reliance on any information provided by Rare Genomics, Rare Genomics employees, Rare Genomics volunteers, or others\n    appearing on RareShare at the invitation of Rare Genomics, or other User or visitor to RareShare is solely at your own\n    risk.\n    <br>\n    <br> RareShare may contain health- or medical-related materials that are sexually explicit. Some users may find Content to\n    be emotionally difficult. If you find these materials offensive, you may not want to use RareShare.\n    <br>\n    <br>\n\n    <b>Privacy Policy</b>\n    <br>\n    <br> The RareShare Privacy Policy, located at Privacy Policy Page , provides information about our collection, use and disclosure\n    of information about users of the Services. In particular, refer to the Privacy Policy for the policies concerning Children\n    Users and International Users. By accessing and using the Services, you agree that you have read the terms of the Privacy\n    Policy and acknowledge, agree, and accept that the Privacy Policy forms an integral part of these Terms and Conditions\n    and are incorporated by reference.\n    <br>\n    <br>\n\n    <b>Acceptable and Lawful Use of RareShare by Members</b>\n    <br>\n    <br> Members shall not post or upload any information or other content on RareShare that (a) is false, inaccurate or misleading;\n    (b) is obscene or indecent; (c) infringes any copyright, patent, trademark, trade secret or other proprietary rights\n    or rights of publicity or privacy of any party; or (d) is defamatory, libelous, threatening, abusive, hateful, abusive,\n    embarrassing to any other person or contains pornography, as determined by Rare Genomics in its sole discretion. Members\n    shall not interfere with other members\' use and enjoyment of RareShare (for example, by harassing, threatening or stalking\n    another participant of a chat room, forum, or threaded message, including the use of expressions of bigotry, racism,\n    hatred, or profanity). Members may not use RareShare to conduct any activity that is illegal or violates the rights of\n    others, provide instructional information about illegal activities, or promote physical harm or injury against any group\n    or individual. If you observe activity that violates these terms, contact Rare Genomics at info@rareshare.org\n    <br>\n    <br> Additionally, in consideration of being allowed to use RareShare, you shall not:\n    <br>\n    <br> Post advertisements or solicitations of business, chain letters, spam (the same Content posted more than once), or pyramid\n    schemes;\n    <br> Disrupt the normal flow of dialogue, or post comments that are not related to the topic being discussed after receiving\n    a warning;\n    <br> Impersonate another person or provide other inaccurate information;\n    <br> Allow other person or entity to use your information to post or view comments ; or\n    <br> Engage in any other conduct that restricts or inhibits another from using or enjoying RareShare.\n    <br>\n    <br> Rare Genomics reserves the right, but is not obligated to perform the following activities regarding RareShare:\n    <br>\n    <br> Record, store, monitor, analyze, edit, delete, or disclose any communication or information in RareShare or RareShare\n    Communities for the improvement of services, or enhancement of RareShare, or if such communication violates these terms.\n    <br> Investigate complaints and allegations that a user’s activities violate these terms and determine in its sole discretion\n    to remove or request the removal of the communication.\n    <br> Remove communications which are abusive, illegal, or disruptive, hateful conduct, or that otherwise fail to conform\n    with these terms, at the sole discretion of Rare Genomics.\n    <br> Terminate access of a user to RareShare upon any breach of these terms.\n    <br>\n    <br>\n\n    <b>Rare Genomics, its licensors, partners, or affiliate have no liability or responsibility to users of RareShare or any\n      other person or entity for performance or nonperformance of the aforementioned activities.</b>\n    <br>\n    <br> Use of RareShare by Members and Non-Members: You agree that you will not post or upload any material that contains software\n    viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any\n    computer software or surreptitiously intercept or expropriate any system, data or personal information contained on RareShare.\n    You may not use any robot, spider, scraper, or other automated means to access RareShare or Content or Services provided\n    on RareShare for any purposes. You shall not attempt to make RareShare unavailable through denial-of-service attacks\n    or similar means. You shall not use contact information provided by members, or collect information about RareShare members,\n    to facilitate the sending of unsolicited bulk communications.\n    <br>\n    <br>\n\n    <b>Commercial Use</b>\n    <br>\n    <br> The Content and information contained in RareShare may only be used for commercial or research purposes with the express\n    and written approval by Rare Genomics. Organizations, companies, and/or businesses should not use RareShare without express\n    consent from Rare Genomics if the use is intended for commercial purposes.\n    <br>\n    <br>\n\n    <b>Copyright - Use of Content</b>\n    <br>\n    <br> Rare Genomics authorizes you to view or download a single copy of the material on RareShare solely for your personal,\n    noncommercial use if you include the copyright notice located at the end of the material, for example: "© 2016, Rare\n    Genomics Institute, Inc. All rights reserved" and other copyright and proprietary rights notices that are specifically\n    noted in the Content. Any special rules for the use of certain licensed software and other items accessible on the RareShare\n    may be noted elsewhere on RareShare and are incorporated into these Terms and Conditions by reference.\n    <br>\n    <br> The Content is protected by copyright under United States law. Title to the Content remains with Rare Genomics or its\n    licensors. Any use of the Content not expressly permitted by these Terms and Conditions is a breach of these Terms and\n    Conditions and may violate copyright, trademark, or other laws. Content and features are subject to change or termination\n    without notice.\n    <br>\n    <br> All rights not expressly granted herein are reserved to Rare Genomics and its licensors. Rare Genomics may exercise\n    editorial discretion at any time regarding the Content of RareShare.\n    <br>\n    <br> If you violate any of these Terms and Conditions, your permission to use the Content automatically terminates and you\n    must immediately destroy any copies you have made of any portion of the Content.\n    <br>\n    <br>\n\n    <b>User Submissions - License</b>\n    <br>\n    <br> RareShare includes community areas, such as forums and member areas, where members may post messages, images, and other\n    Content. If you are a member, you (or the author) own the copyright in the messages, media like a photo or video, and\n    other content you post in the RareShare Communities. By uploading such content, you:\n    <br>\n    <br> grant RareShare and our affiliates a perpetual, non-exclusive, sublicensable, worldwide, royalty-free license to use,\n    copy, print, display, reproduce, modify, publish, post, transmit and distribute and create derivative works of the media\n    and any material included in the media, subject to the terms of the Privacy Policy, and certify that any person pictured\n    or discussed in the submitted media or content (or, if a minor, his/her parent/legal guardian) authorizes Rare Genomics\n    to use, copy, print, display, reproduce, modify, publish, post, transmit and distribute the media and any material included\n    in such media. If you are providing Content as a professional, you further certify that you have obtained all necessary\n    written authorizations and the approval of your organization to provide content. Do not upload pictures or Content of\n    individuals if you have not received their express consent.\n    <br> While some areas in the RareShare Communities may be monitored periodically for topicality, Rare Genomics has no obligation\n    to prescreen content or uploaded media and is not responsible for their content. We encourage you to notify us of inappropriate\n    or illegal content and we reserve the right to remove content for any reason.\n    <br>\n    <br>\n\n    <b>Personal Information of Others</b>\n    <br>\n    <br> You agree not to disclose to any person or entity personally identifiable information about other members that you learn\n    using RareShare (whether posted in the RareShare Communities by a member or emailed to you by a member) without the express\n    consent of such member. Any agreement between Users of RareShare are strictly between the users and do not involve Rare\n    Genomics.\n    <br>\n    <br>\n\n    <b>Links to Other Websites</b>\n    <br>\n    <br> RareShare may contain links to other websites that are not under the control of Rare Genomics. Inclusion of any link\n    does not imply endorsement by Rare Genomics and Rare Genomics is not responsible for the content of linked content.\n    <br>\n    <br>\n\n    <b>Membership Termination</b>\n    <br>\n    <br> You agree that Rare Genomics may, with or without cause, immediately terminate your RareShare membership and access\n    without prior notice. Without limiting the foregoing, the following may lead to a termination by Rare Genomics of a member\'s\n    membership and use of RareShare:\n    <br>\n    <br> breaches or violations of this Agreement or other incorporated agreements or guidelines, requests by law enforcement\n    or other government agencies, a request by you (self-initiated membership cancellation), unexpected technical issues\n    or problems, and extended periods of inactivity.\n    <br> Rare Genomics has no obligation to maintain or store information or data that you have posted on or uploaded to RareShare.\n    <br>\n    <br>\n\n    <b>Disclaimer of Warranties</b>\n    <br>\n    <br> The advice, recommendations, information, and conclusions posted or emailed by other members of RareShare are not in\n    any way vetted, approved or endorsed by Rare Genomics. The use of RareShare and the Content is at your own risk.\n    <br>\n    <br> When using RareShare, information will be transmitted over a medium that may be beyond the control and jurisdiction\n    of Rare Genomics and its suppliers. Accordingly, Rare Genomics assumes no liability for or relating to the delay, failure,\n    interruption, or corruption of any data or other information transmitted in connection with use of RareShare.\n    <br>\n    <br> RareShare and the Content are provided on an "as is" basis. Rare Genomics, ITS LICENSORS, AND ITS SUPPLIERS, TO THE\n    FULLEST EXTENT PERMITTED BY LAW, DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING\n    BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES\' RIGHTS, AND FITNESS\n    FOR PARTICULAR PURPOSE. Without limiting the foregoing, Rare Genomics, its licensors, and its suppliers make no representations\n    or warranties about the timeliness or accuracy of the content.\n    <br>\n    <br>\n\n    <b>Limitation of Liability</b>\n    <br>\n    <br> In no event shall Rare Genomics, its partners, contributors, licensors, its suppliers, affiliates, or any third parties\n    mentioned on RareShare be liable for any damages (including, without limitation, incidental or consequential damages,\n    personal injury/wrongful death, lost profits, or damages resulting from lost data or business interruption) resulting\n    from the use of or inability to use RareShare or the Content, whether based on warranty, contract, tort, or any other\n    legal theory, and whether or not Rare Genomics, its partners, contributors, licensors, its suppliers, affiliates, or\n    any third parties mentioned on RareShare are advised of the possibility of such damages. Rare Genomics, its licensors,\n    its suppliers, or any third parties mentioned on RareShare shall not be liable for any damages. Rare Genomics, its licensors,\n    its suppliers, or any third parties mentioned on RareShare are not liable for any personal injury, including death, caused\n    by your use or misuse of RareShare or its content, including that which is accessible without registration. Any claims\n    arising in connection with your use of RareShare or its content must be brought within one (1) year of the date of the\n    event giving rise to such action occurred. Remedies under these Terms and Conditions are exclusive and are limited to\n    those expressly provided for in these Terms and Conditions.\n    <br>\n    <br>\n\n    <b>Indemnification</b>\n    <br>\n    <br> You agree to indemnify and hold harmless Rare Genomics, its officers, employees, volunteers, agents, subsidiaries, affiliates\n    and other partners, from and against any and all claims, actions or demands, liabilities and settlements including without\n    limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, the media and/or content\n    that you uploaded and/or your violation of any other terms of this Agreement.\n    <br>\n    <br>\n\n    <b>Fees</b>\n    <br>\n    <br> Membership with RareShare is currently free. Rare Genomics reserves the right to from time to time change the terms\n    of this Agreement and charge for membership and/or to provide additional optional services for a fee.\n    <br>\n    <br>\n\n    <b>Member Notices</b>\n    <br>\n    <br> If you register as a member, you agree that Rare Genomics may send notices to you by email at the email address you\n    provide when registering to become a member (or which you later update using the functionality of RareShare).\n    <br>\n    <br>\n\n    <b>Governing Law and Venue</b>\n    <br>\n    <br> This agreement shall be governed by the laws of the State of Maryland and the applicable federal laws of the United\n    States of America. All disputes arising under, or in any way connected with membership in or use of RareShare, shall\n    be litigated exclusively in the state or federal courts residing in the State of Maryland, and in no other court or jurisdiction.\n    You hereby submit to the jurisdiction of the state and federal courts sitting in the State of Maryland.\n    <br>\n    <br>\n\n    <b>Miscellaneous Terms</b>\n    <br>\n    <br> "RareShare" and the RareShare logo are trademarks of Rare Genomics. You agree not to display or use these trademarks\n    in any manner without Rare Genomics\' prior, written permission.\n    <br>\n    <br> Rare Genomics may assign this agreement at any time to a third party, a subsidiary or parent company or to a successor\n    to its business as part of a merger or sale of substantially all of its assets. You may not assign or transfer this agreement.\n    <br>\n    <br> If any provision of this Agreement is held to be unenforceable for any reason, the remaining provisions will be unaffected\n    and remain in full force and effect.\n    <br>\n    <br>\n\n    <b>Modifications to this Agreement</b>\n    <br>\n    <br> We reserve the right to modify this Agreement at any time, and without prior notice, by posting amended terms on RareShare.\n    We encourage you to review this Agreement periodically for any updates or changes, which will have an updated effective\n    date.\n    <br>\n    <br> For any questions or comments, or to report violations of this Agreement, let us know, or contact us at info@rareshare.org\n    <br>\n    <br>\n  </ng-container>\n\n  <ng-container *ngIf="isLoginFormShown">\n    <ion-grid style="width: 50%;">\n      <ion-row center justify-content-center align-items-center>\n        <img width="40%" src="assets/imgs/main/rg-logo.png">\n      </ion-row>\n      <form name="loginForm">\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input required name="loginEmail" type="email" [(ngModel)]="loginEmail" text-lowercase></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input required name="loginPwd" type="password" [(ngModel)]="loginPwd" text-lowercase></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-end align-items-end style="margin-top: 20px;">\n          <button class="signIn-btn disable-hover" ion-button full block (click)="onClickSignIn()">Sign-in</button>\n        </ion-row>\n        <ion-row justify-content-end align-items-end style="margin-top: 20px;">\n          <button class="forgot-pwd-btn  disable-hover" ion-button full block (click)="onClickSignIn()">Forgot Password?</button>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isPreferenceSelectionShown">\n    <ion-grid style="width: 50%; position: relative; top: 10%;">\n      <ion-row>\n        <div class="pwd-lbl">Turn on notifications:</div>\n      </ion-row>\n      <ion-row>\n        <div class="notification-subHeader-text">\n          We can let you know when someone messages you or notify you about other important activity.\n        </div>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <button class="skip-btn disable-hover" ion-button (click)="onClickSkip()">Skip</button>\n        </ion-col>\n        <ion-col>\n            <button class="notifyMe-btn disable-hover" ion-button (click)="onClickNotify()">Yes, Notify Me!</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n\n</ion-content>\n\n<ion-footer no-border *ngIf="isTermsAndConditionsShown">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button class="agree-btn" ion-button medium block (click)="onClickAgree()">Agree</button>\n          </ion-col>\n          <ion-col>\n            <button class="disagree-btn" ion-button medium block (click)="onClickDisagree()">Disagree</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, formBuilder, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.isRareShareShown = false;
        this.isRareReachShown = false;
        this.isContactUsShown = false;
        this.isTermsConditionsShown = false;
        this.isPrivacyPolicyShown = false;
        this.isMySettingsShown = false;
        this.isSupportAndFeedbackShown = false;
        this.isHelpCenterShown = false;
        this.submitAttempt = false;
        this.shownGroup = null;
        this.frequentlyAskedQuestions = [{
                question: 'What happens if I don’t turn on the Mood feedback?',
                answer: 'By default,the Mood feedback is turned ON while signing up for an account. ' +
                    'This feedback is important to monitor the patient’s progress with the treatment.More enhancements ' +
                    'to the mood tracker will be implemented in future releases along with symptoms tracker where patients ' +
                    'can add symptoms that they experience during onset or the course of the treatment and it is tracked on a ' +
                    'regular basis. It’s important that the everyday mood of the patient is recorded so that capturing the mood ' +
                    'will give a good platform for analysing the patient’s reaction to the course of treatment they undertake. ' +
                    'Turning the mood feedback feature OFF will not give sufficient information for analysing and helping the ' +
                    'patient with more suggestions/information.'
            }, {
                question: 'What is Hope Circle?',
                answer: 'Hope circle is a network of people/organisation that the patient would like to add to their list. ' +
                    'this circle of hope is composed by every key player on the patient’s path to cure. The key players can ' +
                    'be close friends, other groups of Patients, the Patient’s physicians, geneticist, other medical specialist, ' +
                    'clinical treatment development specialist (analysts, researchers) or other supporting organization’s ' +
                    'contact details for quick access by the patient. This network stands as a symbol of hope to what the ' +
                    'patient is going through, emotionally and physically. Every key member of the Circle of Hope plays N ' +
                    'important role to push forward and accelerates the search path for a cure.'
            }, {
                question: 'What does the medication tracker do?',
                answer: 'The medication tracker is a feature provided, to enable the patient to maintain easily the medication ' +
                    'details and track proper intake of the appropriate dosage of prescribed medications by means of reminders ' +
                    'at various time intervals. The main objective of this feature is ensuring treatment adherence.'
            }, {
                question: 'What is the purpose of Calendar/Scheduler?',
                answer: 'The objective of this function is to schedule appointments with the patient’s  physicians, or their ' +
                    'multiple appointments if they participate on a clinical trial. To participate on a clinical trial requires ' +
                    'a certain frequency of visits to the clinicians, follow ups and monitoring the patient’s evolution during ' +
                    'testing a treatment in clinical trial stage.'
            }, {
                question: 'What is the purpose of Rare REACH?',
                answer: 'Rare reach is aimed to educate and guide the patients and their families about the unknown process a ' +
                    'patient has to go through, when DNA analysis is recommended. This feature is build as a slideshow with ' +
                    'pictures, for easy reading and comprehension.'
            }, {
                question: 'What Donating my health data implies?',
                answer: 'Donating health data refers to accepting to donate the health information of the patient for research ' +
                    'and science purposes. The data donation is anonymized and de-identified before being donated, only ' +
                    'relevant data for medical and clinical purposes is shared.'
            }, {
                question: 'Is my personal private information secured and protected?',
                answer: 'We are implementing HIPAA compliance internal processes to ensure the patient’s personal information ' +
                    'will be kept protected, secured and confidential.'
            }, {
                question: 'How can I reset the password?',
                answer: 'The user’s pasword can be reset by clicking on “forgot password” button. A reset link will be sent to the ' +
                    'user’s registered e-mail id.'
            }, {
                question: 'Why should I enter my “date of birth” (DOB) as a caregiver instead of the patient’s during sign up?',
                answer: 'The account is relevant for the user, irrespective of whether it is a patient or a caregiver.To secure ' +
                    'the account and restrict one user creating multiple accounts, the date of birth and email id of the ' +
                    'account creator plays the role of unique identifiers.'
            }, {
                question: 'Can a caregiver have more than one patient?',
                answer: 'The Caregiver is associated to a patient who is under 18 or a patient above 18 with special needs. One ' +
                    'caregiver is associated with one patient for this release. Feature updates to include caregiver ' +
                    'associated with more than one patient will be handled in future releases.'
            }, {
                question: 'How can I contact Rare Genomics?',
                answer: 'By clicking on the General Menu on the top navigation bar, the option “Contact Us” will guide you to ' +
                    'express your interest or queries to Rare Genomics.'
            }];
        this.settings = {};
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
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenusPage');
    };
    MenuPage.prototype.resetVariables = function () {
        this.isRareShareShown = false;
        this.isRareReachShown = false;
        this.isContactUsShown = false;
        this.isTermsConditionsShown = false;
        this.isPrivacyPolicyShown = false;
        this.isMySettingsShown = false;
        this.isSupportAndFeedbackShown = false;
        this.isHelpCenterShown = false;
    };
    MenuPage.prototype.closeWindow = function () {
        this.navCtrl.pop();
        ;
    };
    MenuPage.prototype.contactFormGroupValidations = function () {
        this.contactForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(70), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            description: [''],
            interest: ['']
        });
    };
    MenuPage.prototype.validate = function () {
        if (this.contactForm.valid) {
            return true;
        }
        // figure out the error message
        var errorMsg = '';
        // validate each field
        var fName = this.contactForm.controls['firstName'];
        var lName = this.contactForm.controls['lastName'];
        var mail = this.contactForm.controls['email'];
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
        var alert = this.alertCtrl.create({
            subTitle: errorMsg || '!',
            buttons: ['OK']
        });
        alert.present();
        return false;
    };
    MenuPage.prototype.submitContactInfo = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.validate()) {
            var alert_1 = this.alertCtrl.create({
                message: 'Thank you for contacting us!Depending on your interests,we\'ll contact you shortly!.<br/>Sincerely,<br/>Your Raregenomics Team',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    MenuPage.prototype.emailComposerWindow = function () {
        console.log('email Composer');
    };
    MenuPage.prototype.helpCenterWindow = function () {
        this.resetVariables();
        this.isHelpCenterShown = true;
        this.screenTitle = "Help Center";
    };
    MenuPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    MenuPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    MenuPage.prototype.updateNotifications = function (value) {
        this.settings['notifications'] = value['notifications'];
    };
    MenuPage.prototype.updateReminderTime = function (value) {
        this.settings['reminderTime'] = value['reminderTime'];
    };
    MenuPage.prototype.setMoodFeedback = function (value) {
        this.settings['moodfeedback'] = value['moodfeedback'];
    };
    MenuPage.prototype.setDonateHealthData = function (value) {
        this.settings['donatehealthdata'] = value['donatehealthdata'];
    };
    MenuPage.prototype.callModalScreen = function (value) {
        // let modal = this.modalCtrl.create(MoodFeedbackPage, this.settings);
        // modal.present();
    };
    MenuPage.prototype.provideCGAccess = function (isChecked) {
        console.log('&&&&&&&&&&&' + isChecked);
        // if(isChecked)
        // {
        //   this.CGUsername.readonly = false;
        //   this.CGPassword.readonly = false;
        // }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>\n      <ion-label class="toolbartitle">{{screenTitle}}</ion-label>\n    </ion-title>\n    <ion-buttons left>\n      <button class="btnTopWhite" ion-button icon-only (click)="closeWindow()">\n        <ion-icon name="arrow-dropleft"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ng-container *ngIf="isRareShareShown">\n    <iframe frameborder="0" allowfullscreen width="100%" height="100%" src="http://www.raregenomics.org/"></iframe>\n  </ng-container>\n\n  <ng-container *ngIf="isRareReachShown">\n    <ion-slides pager="true" zoom="true">\n      <ion-slide>\n        <ion-card style="height: 80% !important;">\n          <ion-toolbar class="slide-title">Step 1: Connect with RGI</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide1A.jpg" class="slide-image" />\n          <p class="slide-description">After contacting Rare Genomics Institute, you will receive a link to an application form to provide relevant medical\n            information and consent for RG\'s network.</p>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-toolbar class="slide-title">Step 2: Talk to a Patient Advocate</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide2A.jpg" class="slide-image" />\n          <p class="slide-description">Your Patient Advocate will set-up an informational phone call to educate you about the process.\n            <br/>\n            <br/>After the call, you will be asked to fill out a follow-up form to familiarize you with the process and find you\n            the most fitting RG partner.</p>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-toolbar class="slide-title">Step 3: Physician Referral</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide3A.jpg" class="slide-image" />\n          <p class="slide-description">In order to get connected to an RG partner, you need to have a physician that wishes to request exome or whole\n            genome sequencing.\n            <br/>\n            <br/>A clinical geneticist must determine your eligibility for sequencing, and the physician will interept sequencing\n            results.\n          </p>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-toolbar class="slide-title">Step 4: Connect to a RG Partner</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide4A.jpg" class="slide-image" />\n          <p class="slide-description">Once your Patient Advocate(PA) receives sequencing confirmation from your physician, PA will give you requisition\n            forms and shipping information to request sequencing with the RG partner laboratory.</p>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-toolbar class="slide-title">Step 5: Funding</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide5A.jpg" class="slide-image" />\n          <p class="slide-description">RG strives to provide access to cutting edge technologies. But we do not have the funds to pay for genome sequencing\n            and analysis for every family that is registered with us. However, we offer a few options for genome sequencing:\n            <br/>\n            <br/>1)Self-Pay 2)Insurance 3)Crowdfunding</p>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-toolbar class="slide-title">Step 6: Results from squencing</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide6A.jpg" class="slide-image" />\n          <p class="slide-description">Turn around times for exome sequencing averages around 2-6 months or longer.\n            <br>\n            <br>Our experts provide a report including:\n            <br>a) Summary of your history\n            <br>b) Hypothesis & possible diagnosis (if applicable)\n            <br>c) Description of similar cases\n            <br>d) A list of potential genes/biological pathways involved in the etiology/progression of disease.\n            <br>e) Advice on future directions</p>\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n          <ion-toolbar class="slide-title">Step 7: A Personalized Research Platform</ion-toolbar>\n          <img src="assets/imgs/rareShare/slide7A.jpg" class="slide-image" />\n          <p class="slide-description">Once results are obtained, our RG site will share the results with you via our medical information-sharing platform\n            called Patients Know Best(PKB). We will invite you to setup a PKB account on the site, and form your account\n            you can access the results once they are posted.</p>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ng-container>\n\n  <ng-container *ngIf="isContactUsShown">\n    <ion-label class="labelTransBg">We want to hear from you!</ion-label>\n\n    <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n    <ion-grid>\n\n      <form [formGroup]="contactForm">\n\n        <ion-row>\n          <ion-item class="labelForm">\n            <ion-label>First Name\n              <sup>*</sup>\n            </ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-input class="formFill" formControlName="firstName" type="text" [class.invalid]="!contactForm.controls.firstName.valid && (contactForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item *ngIf="!contactForm.controls.firstName.valid  && (contactForm.controls.firstName.dirty || submitAttempt)">\n            <p>Please enter a valid first name.</p>\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n          <ion-item class="labelForm">\n            <ion-label>Last Name\n              <sup>*</sup>\n            </ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-input class="formFill" formControlName="lastName" type="text" [class.invalid]="!contactForm.controls.lastName.valid && (contactForm.controls.lastName.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item *ngIf="!contactForm.controls.lastName.valid  && (contactForm.controls.lastName.dirty || submitAttempt)">\n            <p>Please enter a valid last name.</p>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class="labelForm">\n            <ion-label>Email Address\n              <sup>*</sup>\n            </ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-input class="formFill" formControlName="email" type="text" [class.invalid]="!contactForm.controls.email.valid && (contactForm.controls.email.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item *ngIf="!contactForm.controls.email.valid  && (contactForm.controls.email.dirty || submitAttempt)">\n            <p>Please enter a valid email.</p>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class="labelForm">\n            <ion-label>Please tell us how we can help you:</ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea class="formFill" formControlName="description" type="text"></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class="labelForm">\n            <ion-label>I\'m interested in:</ion-label>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-select class="formFill" style="width: 30%;height: 55%;" formControlName="interest" multiple="true">\n              <ion-option value="patientResources">Patient Resources</ion-option>\n              <ion-option value="rareREACH">rareREACH</ion-option>\n              <ion-option value="research">Research</ion-option>\n              <ion-option value="pressMedia">Press/Media</ion-option>\n              <ion-option value="business">Business</ion-option>\n              <ion-option value="donor">Donor</ion-option>\n              <ion-option value="volunteer">Volunteer</ion-option>\n              <ion-option value="intlInquiries">International Inquiries</ion-option>\n              <ion-option value="other">Other</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ng-container>\n\n  <ng-container *ngIf="isTermsConditionsShown">\n    <div>\n      <b>Terms of Service</b>\n      <br>\n      <b>Revision date October 27, 2016</b>\n      <br>\n      <br>\n\n      <b>Effective date May 16, 2008</b>\n      <br>\n      <br> Welcome to RareShare.org ("RG Patient’s App")! We are built on a premise that sharing information is good, especially\n      when it comes to information about rare diseases. The more you share the more you have an opportunity to help others\n      whose lives have been touched by rare disease. Since rare diseases are not common, they are also often not well understood.\n      By joining our community of support and sharing information about your experience, you will help others, including\n      researchers, better understand your disease.\n      <br>\n      <br> Below are the Terms of Service, and in the right column, you will find a summary that will help you understand these\n      terms, although the summary is not legally binding.\n      <br>\n      <br> The following terms constitute an agreement between you and Rare Genomics Institute, Inc. (“Rare Genomics” or “we”\n      or “us”) the operator of RareShare. RareShare, described below, provides users with a wide array of services including,\n      without limitation, news, reference resources, personalized content, and communication platforms (collectively, the\n      "Services"). The Services are provided to users of RareShare subject to the following Terms of Service (the "Terms"),\n      the most current version of which is located at the bottom of any page of RareShare. By using the Services, you the\n      user (“user” or “you”) agree to these Terms, whether or not you are a registered member of RareShare or just a casual\n      visitor. These Terms govern your use of the Services and create a binding legal agreement that we may enforce against\n      you in the event of a violation. If you do not agree to all of these Terms of Service, do not use the Services. To\n      the extent you register with RareShare as a member, then in addition to the terms that are applicable to all users\n      of RareShare, the terms that apply only to members shall apply to you too as well.\n      <br>\n      <br>\n\n      <b>Account Registration</b>\n      <br>\n      <br> You must register an account with RareShare to access all of the Services. Registration requires you to provide us\n      with information about yourself, which include your name, birthdate, gender, picture, email address, profession, relationship\n      to a rare disease patient, country, state, city, zip code, home community, a statement about yourself, your website\n      URL, your blog URL, and other information specified in the registration form ("Registration Information"), and to select\n      a username and password that will be associated with your account. You agree that your Registration Information is\n      true, accurate, current, and complete, and you will promptly update your Registration Information as necessary so that\n      it continues to be true, accurate, current and complete. We may attempt to verify the accuracy of the Registration\n      Information that you have provided and update it as necessary. All members represent and warrant that the information\n      they provided when registering as a member, and all information that they subsequently provide regarding themselves\n      and their membership, is true and accurate and not misleading.\n      <br>\n      <br>\n\n      <b>Protection and Use of Your Membership Password and Login</b>\n      <br>\n      <br> You are solely responsible for maintaining the confidentiality and security of your RareShare account username and\n      password and you may not permit another person to use your username and password to access the Services. You are solely\n      responsible for the control of your account access information and all activity that occurs under your account. If\n      you believe that the security of your account information has been compromised, you should immediately change your\n      username and password through the account settings feature or notify us at info@rareshare.org and we will assist you.\n      You grant Rare Genomics and all other persons or entities involved in the operation of RareShare the right to transmit,\n      monitor, retrieve, store, and use your information in connection with the operation of RareShare. Rare Genomics cannot\n      and does not assume any responsibility or liability for any information you submit, or your or third parties\' use or\n      misuse of information transmitted or received using RareShare tools and services. Rare Genomics shall have no liability\n      for any unauthorized access to or use of your account information.\n      <br>\n      <br>\n\n      <b>Restrictions on Eligibility</b>\n      <br>\n      <br> With your use of RareShare, you consent to the terms contained in this policy. If you do not consent to all of the\n      terms in these Terms of Service and Privacy Policy, you must not use RareShare. International users that do not agree\n      with the Privacy Policy and/or children under the age of 13 must not use RareShare.\n      <br>\n      <br>\n\n      <b>RareShare Does Not Provide Medical Advice</b>\n      <br>\n      <br> The contents of the RareShare, such as text, graphics, images, information obtained from RareShare affiliates or licensors,\n      and other material contained on RareShare, including information posted by users ("Content") are for informational\n      purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.\n      Always seek the advice of your physician or other qualified health provider with any questions you may have regarding\n      a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have\n      read on RareShare!\n      <br>\n      <br> If you think you may have a medical emergency, call your doctor or 911 immediately. Rare Genomics does not recommend\n      or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned\n      on RareShare\n      <br>\n      <br>\n\n      <b>User Assumption of Risk</b>\n      <br>\n      <br> Reliance on any information provided by Rare Genomics, Rare Genomics employees, Rare Genomics volunteers, or others\n      appearing on RareShare at the invitation of Rare Genomics, or other User or visitor to RareShare is solely at your\n      own risk.\n      <br>\n      <br> RareShare may contain health- or medical-related materials that are sexually explicit. Some users may find Content\n      to be emotionally difficult. If you find these materials offensive, you may not want to use RareShare.\n      <br>\n      <br>\n\n      <b>Privacy Policy</b>\n      <br>\n      <br> The RareShare Privacy Policy, located at Privacy Policy Page , provides information about our collection, use and\n      disclosure of information about users of the Services. In particular, refer to the Privacy Policy for the policies\n      concerning Children Users and International Users. By accessing and using the Services, you agree that you have read\n      the terms of the Privacy Policy and acknowledge, agree, and accept that the Privacy Policy forms an integral part of\n      these Terms and Conditions and are incorporated by reference.\n      <br>\n      <br>\n\n      <b>Acceptable and Lawful Use of RareShare by Members</b>\n      <br>\n      <br> Members shall not post or upload any information or other content on RareShare that (a) is false, inaccurate or misleading;\n      (b) is obscene or indecent; (c) infringes any copyright, patent, trademark, trade secret or other proprietary rights\n      or rights of publicity or privacy of any party; or (d) is defamatory, libelous, threatening, abusive, hateful, abusive,\n      embarrassing to any other person or contains pornography, as determined by Rare Genomics in its sole discretion. Members\n      shall not interfere with other members\' use and enjoyment of RareShare (for example, by harassing, threatening or stalking\n      another participant of a chat room, forum, or threaded message, including the use of expressions of bigotry, racism,\n      hatred, or profanity). Members may not use RareShare to conduct any activity that is illegal or violates the rights\n      of others, provide instructional information about illegal activities, or promote physical harm or injury against any\n      group or individual. If you observe activity that violates these terms, contact Rare Genomics at info@rareshare.org\n      <br>\n      <br> Additionally, in consideration of being allowed to use RareShare, you shall not:\n      <br>\n      <br> Post advertisements or solicitations of business, chain letters, spam (the same Content posted more than once), or\n      pyramid schemes;\n      <br> Disrupt the normal flow of dialogue, or post comments that are not related to the topic being discussed after receiving\n      a warning;\n      <br> Impersonate another person or provide other inaccurate information;\n      <br> Allow other person or entity to use your information to post or view comments ; or\n      <br> Engage in any other conduct that restricts or inhibits another from using or enjoying RareShare.\n      <br>\n      <br> Rare Genomics reserves the right, but is not obligated to perform the following activities regarding RareShare:\n      <br>\n      <br> Record, store, monitor, analyze, edit, delete, or disclose any communication or information in RareShare or RareShare\n      Communities for the improvement of services, or enhancement of RareShare, or if such communication violates these terms.\n      <br> Investigate complaints and allegations that a user’s activities violate these terms and determine in its sole discretion\n      to remove or request the removal of the communication.\n      <br> Remove communications which are abusive, illegal, or disruptive, hateful conduct, or that otherwise fail to conform\n      with these terms, at the sole discretion of Rare Genomics.\n      <br> Terminate access of a user to RareShare upon any breach of these terms.\n      <br>\n      <br>\n\n      <b>Rare Genomics, its licensors, partners, or affiliate have no liability or responsibility to users of RareShare or any\n        other person or entity for performance or nonperformance of the aforementioned activities.</b>\n      <br>\n      <br> Use of RareShare by Members and Non-Members: You agree that you will not post or upload any material that contains\n      software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality\n      of any computer software or surreptitiously intercept or expropriate any system, data or personal information contained\n      on RareShare. You may not use any robot, spider, scraper, or other automated means to access RareShare or Content or\n      Services provided on RareShare for any purposes. You shall not attempt to make RareShare unavailable through denial-of-service\n      attacks or similar means. You shall not use contact information provided by members, or collect information about RareShare\n      members, to facilitate the sending of unsolicited bulk communications.\n      <br>\n      <br>\n\n      <b>Commercial Use</b>\n      <br>\n      <br> The Content and information contained in RareShare may only be used for commercial or research purposes with the express\n      and written approval by Rare Genomics. Organizations, companies, and/or businesses should not use RareShare without\n      express consent from Rare Genomics if the use is intended for commercial purposes.\n      <br>\n      <br>\n\n      <b>Copyright - Use of Content</b>\n      <br>\n      <br> Rare Genomics authorizes you to view or download a single copy of the material on RareShare solely for your personal,\n      noncommercial use if you include the copyright notice located at the end of the material, for example: "© 2016, Rare\n      Genomics Institute, Inc. All rights reserved" and other copyright and proprietary rights notices that are specifically\n      noted in the Content. Any special rules for the use of certain licensed software and other items accessible on the\n      RareShare may be noted elsewhere on RareShare and are incorporated into these Terms and Conditions by reference.\n      <br>\n      <br> The Content is protected by copyright under United States law. Title to the Content remains with Rare Genomics or\n      its licensors. Any use of the Content not expressly permitted by these Terms and Conditions is a breach of these Terms\n      and Conditions and may violate copyright, trademark, or other laws. Content and features are subject to change or termination\n      without notice.\n      <br>\n      <br> All rights not expressly granted herein are reserved to Rare Genomics and its licensors. Rare Genomics may exercise\n      editorial discretion at any time regarding the Content of RareShare.\n      <br>\n      <br> If you violate any of these Terms and Conditions, your permission to use the Content automatically terminates and\n      you must immediately destroy any copies you have made of any portion of the Content.\n      <br>\n      <br>\n\n      <b>User Submissions - License</b>\n      <br>\n      <br> RareShare includes community areas, such as forums and member areas, where members may post messages, images, and\n      other Content. If you are a member, you (or the author) own the copyright in the messages, media like a photo or video,\n      and other content you post in the RareShare Communities. By uploading such content, you:\n      <br>\n      <br> grant RareShare and our affiliates a perpetual, non-exclusive, sublicensable, worldwide, royalty-free license to use,\n      copy, print, display, reproduce, modify, publish, post, transmit and distribute and create derivative works of the\n      media and any material included in the media, subject to the terms of the Privacy Policy, and certify that any person\n      pictured or discussed in the submitted media or content (or, if a minor, his/her parent/legal guardian) authorizes\n      Rare Genomics to use, copy, print, display, reproduce, modify, publish, post, transmit and distribute the media and\n      any material included in such media. If you are providing Content as a professional, you further certify that you have\n      obtained all necessary written authorizations and the approval of your organization to provide content. Do not upload\n      pictures or Content of individuals if you have not received their express consent.\n      <br> While some areas in the RareShare Communities may be monitored periodically for topicality, Rare Genomics has no obligation\n      to prescreen content or uploaded media and is not responsible for their content. We encourage you to notify us of inappropriate\n      or illegal content and we reserve the right to remove content for any reason.\n      <br>\n      <br>\n\n      <b>Personal Information of Others</b>\n      <br>\n      <br> You agree not to disclose to any person or entity personally identifiable information about other members that you\n      learn using RareShare (whether posted in the RareShare Communities by a member or emailed to you by a member) without\n      the express consent of such member. Any agreement between Users of RareShare are strictly between the users and do\n      not involve Rare Genomics.\n      <br>\n      <br>\n\n      <b>Links to Other Websites</b>\n      <br>\n      <br> RareShare may contain links to other websites that are not under the control of Rare Genomics. Inclusion of any link\n      does not imply endorsement by Rare Genomics and Rare Genomics is not responsible for the content of linked content.\n      <br>\n      <br>\n\n      <b>Membership Termination</b>\n      <br>\n      <br> You agree that Rare Genomics may, with or without cause, immediately terminate your RareShare membership and access\n      without prior notice. Without limiting the foregoing, the following may lead to a termination by Rare Genomics of a\n      member\'s membership and use of RareShare:\n      <br>\n      <br> breaches or violations of this Agreement or other incorporated agreements or guidelines, requests by law enforcement\n      or other government agencies, a request by you (self-initiated membership cancellation), unexpected technical issues\n      or problems, and extended periods of inactivity.\n      <br> Rare Genomics has no obligation to maintain or store information or data that you have posted on or uploaded to RareShare.\n      <br>\n      <br>\n\n      <b>Disclaimer of Warranties</b>\n      <br>\n      <br> The advice, recommendations, information, and conclusions posted or emailed by other members of RareShare are not\n      in any way vetted, approved or endorsed by Rare Genomics. The use of RareShare and the Content is at your own risk.\n      <br>\n      <br> When using RareShare, information will be transmitted over a medium that may be beyond the control and jurisdiction\n      of Rare Genomics and its suppliers. Accordingly, Rare Genomics assumes no liability for or relating to the delay, failure,\n      interruption, or corruption of any data or other information transmitted in connection with use of RareShare.\n      <br>\n      <br> RareShare and the Content are provided on an "as is" basis. Rare Genomics, ITS LICENSORS, AND ITS SUPPLIERS, TO THE\n      FULLEST EXTENT PERMITTED BY LAW, DISCLAIM ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING\n      BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES\' RIGHTS, AND FITNESS\n      FOR PARTICULAR PURPOSE. Without limiting the foregoing, Rare Genomics, its licensors, and its suppliers make no representations\n      or warranties about the timeliness or accuracy of the content.\n      <br>\n      <br>\n\n      <b>Limitation of Liability</b>\n      <br>\n      <br> In no event shall Rare Genomics, its partners, contributors, licensors, its suppliers, affiliates, or any third parties\n      mentioned on RareShare be liable for any damages (including, without limitation, incidental or consequential damages,\n      personal injury/wrongful death, lost profits, or damages resulting from lost data or business interruption) resulting\n      from the use of or inability to use RareShare or the Content, whether based on warranty, contract, tort, or any other\n      legal theory, and whether or not Rare Genomics, its partners, contributors, licensors, its suppliers, affiliates, or\n      any third parties mentioned on RareShare are advised of the possibility of such damages. Rare Genomics, its licensors,\n      its suppliers, or any third parties mentioned on RareShare shall not be liable for any damages. Rare Genomics, its\n      licensors, its suppliers, or any third parties mentioned on RareShare are not liable for any personal injury, including\n      death, caused by your use or misuse of RareShare or its content, including that which is accessible without registration.\n      Any claims arising in connection with your use of RareShare or its content must be brought within one (1) year of the\n      date of the event giving rise to such action occurred. Remedies under these Terms and Conditions are exclusive and\n      are limited to those expressly provided for in these Terms and Conditions.\n      <br>\n      <br>\n\n      <b>Indemnification</b>\n      <br>\n      <br> You agree to indemnify and hold harmless Rare Genomics, its officers, employees, volunteers, agents, subsidiaries,\n      affiliates and other partners, from and against any and all claims, actions or demands, liabilities and settlements\n      including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, the\n      media and/or content that you uploaded and/or your violation of any other terms of this Agreement.\n      <br>\n      <br>\n\n      <b>Fees</b>\n      <br>\n      <br> Membership with RareShare is currently free. Rare Genomics reserves the right to from time to time change the terms\n      of this Agreement and charge for membership and/or to provide additional optional services for a fee.\n      <br>\n      <br>\n\n      <b>Member Notices</b>\n      <br>\n      <br> If you register as a member, you agree that Rare Genomics may send notices to you by email at the email address you\n      provide when registering to become a member (or which you later update using the functionality of RareShare).\n      <br>\n      <br>\n\n      <b>Governing Law and Venue</b>\n      <br>\n      <br> This agreement shall be governed by the laws of the State of Maryland and the applicable federal laws of the United\n      States of America. All disputes arising under, or in any way connected with membership in or use of RareShare, shall\n      be litigated exclusively in the state or federal courts residing in the State of Maryland, and in no other court or\n      jurisdiction. You hereby submit to the jurisdiction of the state and federal courts sitting in the State of Maryland.\n      <br>\n      <br>\n\n      <b>Miscellaneous Terms</b>\n      <br>\n      <br> "RareShare" and the RareShare logo are trademarks of Rare Genomics. You agree not to display or use these trademarks\n      in any manner without Rare Genomics\' prior, written permission.\n      <br>\n      <br> Rare Genomics may assign this agreement at any time to a third party, a subsidiary or parent company or to a successor\n      to its business as part of a merger or sale of substantially all of its assets. You may not assign or transfer this\n      agreement.\n      <br>\n      <br> If any provision of this Agreement is held to be unenforceable for any reason, the remaining provisions will be unaffected\n      and remain in full force and effect.\n      <br>\n      <br>\n\n      <b>Modifications to this Agreement</b>\n      <br>\n      <br> We reserve the right to modify this Agreement at any time, and without prior notice, by posting amended terms on RareShare.\n      We encourage you to review this Agreement periodically for any updates or changes, which will have an updated effective\n      date.\n      <br>\n      <br> For any questions or comments, or to report violations of this Agreement, let us know, or contact us at info@rareshare.org\n      <br>\n      <br>\n    </div>\n  </ng-container>\n\n\n  <ng-container *ngIf="isPrivacyPolicyShown">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col class="formFill">\n            <ion-item text-wrap>\n              <ion-label>Allow my push notifications</ion-label>\n              <ion-checkbox [(ngModel)]="pnPermission"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="labelForm">\n            <ion-label></ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="formFill">\n            <ion-item text-wrap>\n              <ion-label>Enable fingerprint ID for sign-in</ion-label>\n              <ion-checkbox [(ngModel)]="FIDPermission"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="labelForm">\n            <ion-label></ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="formFill">\n            <ion-item text-wrap>\n              <ion-label>Allow caregiver access</ion-label>\n              <ion-checkbox [(ngModel)]="CGPermission" (ionChange)="provideCGAccess(CGPermission)"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="labelForm">\n            <ion-label></ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="formFill">\n            <ion-item>\n              <ion-input type="text" [(ngModel)]="CGUsername" placeholder="Caregiver username" readonly=true disabled=true></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="labelForm">\n            <ion-label></ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class="formFill">\n            <ion-item>\n              <ion-input type="password" [(ngModel)]="CGPassword" placeholder="Caregiver password" readonly=true disabled=true></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf="isMySettingsShown">\n    <div>\n      <ion-list>\n        <ion-item padding>\n          <ion-label>Allow my push notifications </ion-label>\n          <ion-checkbox [(ngModel)]="settings.notifications" (ionChange)="updateNotifications(settings)"></ion-checkbox>\n        </ion-item>\n\n        <ion-item padding>\n          <ion-label>Mood feedback\n            <ion-label class="subtext">Keep track of your overall well-being for the day </ion-label>\n          </ion-label>\n          <ion-toggle secondary [(ngModel)]="settings.moodfeedback" (ionChange)="setMoodFeedback(settings)"></ion-toggle>\n        </ion-item>\n\n        <ion-row>\n          <ion-col class="remindTime">\n            <ion-label>Remind me at</ion-label>\n          </ion-col>\n          <ion-col class="timeInput">\n            <ion-item>\n              <ion-datetime displayFormat="HH:mm" [(ngModel)]="settings.reminderTime" (ionChange)="callModalScreen(settings)">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-item padding>\n          <ion-label>Donate Health Data\n            <ion-label class="subtext">For science and research purposes only </ion-label>\n          </ion-label>\n          <ion-toggle secondary [(ngModel)]="settings.donatehealthdata" (ionChange)="setDonateHealthData(settings)"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf="isSupportAndFeedbackShown">\n    <div>\n      <img src="assets/imgs/main/rg-logo.png" class="support-logo" />\n      <ion-card>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                Version\n              </ion-col>\n              <ion-col col-6 text-right>\n                {{version}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-card>\n      <ion-card (click)="emailComposerWindow()">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                Submit Feedback\n              </ion-col>\n              <ion-col col-6 text-right>\n                <ion-icon name="arrow-dropright-circle"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-card>\n      <ion-card (click)="helpCenterWindow()">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                Help Center\n              </ion-col>\n              <ion-col col-6 text-right>\n                <ion-icon name="arrow-dropright-circle"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-card>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf="isHelpCenterShown">\n    <ion-list>\n      <ion-item *ngFor="let faq of frequentlyAskedQuestions; let i = index" text-wrap (click)="toggleGroup(i)">\n        <h2>\n          <ion-icon item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n          {{faq.question}}\n        </h2>\n        <div *ngIf="isGroupShown(i)">{{faq.answer}}</div>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n\n</ion-content>\n\n<ion-footer no-border *ngIf="isContactUsShown">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row justify-content-center align-items-center>\n          <button ion-button class="btnSave" ion-button (click)="submitContactInfo()">Submit</button>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer no-border *ngIf="isTermsConditionsShown">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button class="btnSave" ion-button medium block (click)="agree()">Agree</button>\n          </ion-col>\n          <ion-col>\n            <button class="btnDelete" ion-button medium block (click)="disagree()">Disagree</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		278,
		4
	],
	"../pages/hope-circle/hope-circle.module": [
		279,
		3
	],
	"../pages/main/main.module": [
		280,
		7
	],
	"../pages/medications/medications.module": [
		281,
		2
	],
	"../pages/menu/menu.module": [
		282,
		6
	],
	"../pages/profile/profile.module": [
		283,
		5
	],
	"../pages/records/records.module": [
		284,
		1
	],
	"../pages/symptoms/symptoms.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onClickProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Health Hub</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col style="display:flex; justify-content: flex-end;" align-self-center>\n        <button class="menu-btn" ion-button (click)="onClickProfile()">My Profile</button>\n      </ion-col>\n      <ion-col align-self-center>\n        <button class="menu-btn" ion-button (click)="onClickProfile()">Symptoms</button>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col style="display:flex; justify-content: flex-end;" align-self-center>\n        <button class="menu-btn" ion-button (click)="onClickProfile()">Hope Circle</button>\n      </ion-col>\n      <ion-col align-self-center>\n        <button class="menu-btn" ion-button (click)="onClickProfile()">Calendar</button>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col style="display:flex; justify-content: flex-end;" align-self-center>\n        <button class="menu-btn" ion-button (click)="onClickProfile()">Medications</button>\n      </ion-col>\n      <ion-col align-self-center>\n        <button class="menu-btn" ion-button (click)="onClickProfile()">Records</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_service_app_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hope-circle/hope-circle.module#HopeCirclePageModule', name: 'HopeCirclePage', segment: 'hope-circle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medications/medications.module#MedicationsPageModule', name: 'MedicationsPage', segment: 'medications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenusPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/records/records.module#RecordsPageModule', name: 'RecordsPage', segment: 'records', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/symptoms/symptoms.module#SymptomsPageModule', name: 'SymptomsPage', segment: 'symptoms', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_app_service_app_service__["a" /* AppServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { index: 0, title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
            { index: 1, title: 'Rareshare', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] },
            { index: 2, title: 'Get a Diagnosis - RareREACH', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] }
        ];
        this.rgiMenuItems = [
            //As discussed with Bea, commenting out the unnecessary items from the more menu.
            // { title: 'Who we are?', component: RarereachPage },
            // { title: 'Rare Genomics FAQs', component: RarereachPage },
            // { title: 'Get RGI\'s Newsletter', component: RarereachPage },
            { index: 3, title: 'Contact Us.', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] }
        ];
        this.settingsMenuItems = [
            { index: 4, title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] },
            { index: 5, title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] },
            { index: 6, title: 'My Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] },
            { index: 7, title: 'Support & Feedback', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component, {
            pageIndex: page.index
        });
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'You have now been signed out of the app.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/app/app.html"*/'<ion-menu type="overlay" [content]="mycontent" swipeEnabled="false">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <ion-list-header text-center>More Menu</ion-list-header>\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n            <ion-list-header   text-center>Rare Genomic Institute</ion-list-header>\n            <button ion-item menuClose *ngFor="let p1 of rgiMenuItems" (click)="openPage(p1)">\n                {{p1.title}}\n            </button>\n            <ion-list-header text-center>Settings</ion-list-header>\n            <button ion-item menuClose *ngFor="let p2 of settingsMenuItems" (click)="openPage(p2)">\n                {{p2.title}}\n            </button>\n            <ion-item text-center><button menuClose class="signOutMenuItem" (click)="signOut()">Sign out</button></ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppServiceProvider = /** @class */ (function () {
    function AppServiceProvider(http) {
        this.http = http;
        console.log('Hello AppServiceProvider Provider');
    }
    AppServiceProvider.prototype.getMenuId = function () {
        return this.menuId;
    };
    AppServiceProvider.prototype.setMenuId = function (menuId) {
        this.menuId = menuId;
    };
    AppServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppServiceProvider);
    return AppServiceProvider;
}());

//# sourceMappingURL=app-service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.doEdit = false;
        this.profileForm = {};
        this.profileView = {};
        this.profileView['name'] = "Sample Name";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.editProfile = function () {
        this.doEdit = true;
    };
    ProfilePage.prototype.cancelUpdate = function () {
        this.doEdit = false;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-label class="toolbartitle">{{profileView[\'name\']}}</ion-label>\n    <ion-buttons right *ngIf="!doEdit">\n      <button class="btnTopWhite" ion-button icon-only (click)="editProfile()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row justify-content-end align-items-end>\n        <img src="assets/imgs/profile/camera.ico" width="20%" (click)="runCamera()">\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="formFill">\n        <ion-item>\n          <ion-select [(ngModel)]="profileForm.profileHolder" multiple="true">\n            <ion-option value="patient">Patient</ion-option>\n            <ion-option value="donor">Donor</ion-option>\n            <ion-option value="caregiver">CareGiver</ion-option>\n            <ion-option value="other">Other</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="labelForm">\n        <ion-label>My Story</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="formFill">\n        <ion-item>\n          <ion-textarea placeholder="Enter story" [(ngModel)]="profileForm.story">></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="labelForm">\n        <ion-label>My Updates</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="formFill">\n        <ion-item>\n          <ion-textarea placeholder="Enter updates" [(ngModel)]="profileForm.updates"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="labelForm">\n        <ion-label>Conditions</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="formSelectRow">\n      <ion-col class="formSelect">\n        <ion-item>\n          <ion-select type="text" multiple="true" [(ngModel)]="profileForm.conditions">\n            <ion-option *ngFor="let key of conditionKeys" [value]="key.value">{{key.text}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col class="formFill">\n        <button class="addBtn" ion-button icon-only (click)="addCondition()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="labelForm">\n        <ion-label></ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="doEdit">\n      <ion-col class="formFill">\n        <ion-item text-wrap>\n          <ion-label>Allow my profile to be visible in communities and donor searches</ion-label>\n          <ion-checkbox [(ngModel)]="profileForm.permission" checked="false"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer no-border *ngIf="doEdit">\n    <ion-toolbar>\n        <ion-title>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <button class="btnSave" ion-button medium block (click)="updateProfile()">Save</button>\n                    </ion-col>\n                    <ion-col>\n                        <button class="btnDelete" ion-button medium block (click)="cancelUpdate()">Cancel</button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/mysoret/Workspace/rg/newProject/rg-patient/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map