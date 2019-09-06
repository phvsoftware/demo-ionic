import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onLoadAppareil(name: string) {
    this.navCtrl.navigateForward(['single-appareil']);
  }
}
