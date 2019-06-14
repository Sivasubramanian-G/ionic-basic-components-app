import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController, ToastController, LoadingController, ModalController, PopoverController } from 'ionic-angular';
import { ImageCardsPage } from '../image-cards/image-cards';
import { GridsPage } from '../grids/grids';
import { ModalPage } from '../modal/modal';
import { PopoverPage } from '../popover/popover'
import { SearchPage } from '../search/search';
import { SegmentPage } from '../segment/segment';
import { SlidesPage } from '../slides/slides';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public event = {
    date: '2019-06-13',
    time: '12:00'
  }

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController,
    public actionSheet: ActionSheetController,
    public platform: Platform,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController) {

  }

  showLoading() {
    const loader = this.loadingCtrl.create({
      content: "please wait...",
      duration: 3000
    });
    loader.present();
  }

  pressEvent(e) {
    this.press++;
  }

  panEvent(e) {
    this.pan++;
  }

  swipeEvent(e) {
    this.swipe++;
  }

  tapEvent(e) {
    this.tap++;
  }

  goToOtherPage() {
    this.navCtrl.push(ImageCardsPage);
  }

  goToGridPage() {
    this.navCtrl.push(GridsPage);
  }

  goToSearchPage() { 
    this.navCtrl.push(SearchPage);
  }

  goToSegmentPage() {
    this.navCtrl.push(SegmentPage);
  }

  goToSlidesPage() {
    this.navCtrl.push(SlidesPage);
  }
  
  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

  presentModal(){
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  presentPopover(ev){
    const popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }

  openActionSheet() {
    let actionSheet = this.actionSheet.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.toasting('Delete Clicked', 'bottom', 3000);
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            this.toasting('Share Clicked', 'bottom', 3000);
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            this.toasting('Play Clicked', 'bottom', 3000);
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            this.toasting('Favorite Clicked', 'bottom', 3000);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            this.toasting('Cancel Clicked', 'bottom', 3000);
          }
        }
      ]
    });
    actionSheet.present();
  }

  openBasicAlert() {
    const alert = this.alertCtrl.create({
      title: 'Hey there!',
      subTitle: 'Hey there! How are you doing?',
      buttons: [{
        text: 'Fine',
        handler: () => {
          this.toasting('That\'s good I guess!', 'bottom', 3000);
        }
      }]
    });
    alert.present();
  }

  openPromptAlert() {
    const prompt = this.alertCtrl.create({
      title: 'Name',
      message: 'What is your sweet name???',
      inputs: [{
        name: 'name',
        placeholder: 'Sweet name'
      }, ],
      buttons: [
        {
        text: 'Cancel',
        handler: () => {
          this.toasting('Cancel Clicked', 'bottom', 3000);
        }
      },
      {
        text: 'Okay',
        handler: data =>{
          this.toasting(JSON.stringify(data.name)+' is such a sweet name', 'bottom', 3000);
        }
      }
    ]
    });
    prompt.present();
  }

  openConfirmationAlert() {
    const confirm = this.alertCtrl.create({
      title: 'Human or bot',
      message: 'Are you sure you\'re not a bot?',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.toasting('It\'s good that you are a human...','bottom',3000);
          }
        },
        {
          text: 'Disagree',
          handler: () => {
            this.toasting('Shit!!!! You are a bot...', 'bottom', 3000);
          }
        }
      ]
    });
    confirm.present();
  }

  openRadioAlert(){
    let radio = this.alertCtrl.create();
    radio.setTitle('Season');

    radio.addInput(
      {
      type: 'radio',
      label: 'Sunny',
      value: 'sunny',
      checked: true
    });
    radio.addInput({
      type: 'radio',
      label: 'Rainy',
      value: 'rainy',
      checked: false
    });

    radio.addButton({
      text: 'Cancel',
      handler: () => {
        this.toasting('Cancel clicked','bottom',3000);
      }
    });
    radio.addButton({
      text: 'Okay',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.toasting(JSON.stringify(data),'bottom',3000);
      }
    }) ;
    radio.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  openCheckboxAlert() {
    let checkbox = this.alertCtrl.create({
      title: 'Which devices do you have now?',
      inputs: [
        {
          type: 'checkbox',
          label: 'Smart Phone',
          value: 'smartphone'
        },
        {
          type: 'checkbox',
          label: 'Laptop',
          value: 'laptop'
        },
        {
          type: 'checkbox',
          label: 'Desktop',
          value: 'desktop'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.toasting('Cancel clicked','bottom', 3000);
          }
        },
        {
          text: 'Okay',
          handler: data => {
            this.toasting(data,'bottom',3000);
          }
        }
      ]
    });
    checkbox.present();
  }

  toasting(message, position, duration){
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present();
  }

}
