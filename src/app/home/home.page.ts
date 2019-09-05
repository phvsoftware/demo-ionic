import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppareilsPage } from '../appareils/appareils.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToAppareils() {
    console.log("clic !");
    this.navCtrl.navigateForward('appareils');
  }

}
