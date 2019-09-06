import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  name: string;

  constructor(public navParams: NavParams) { }

  ngOnInit() {
    this.name = this.navParams.get('appareil');
  }

}
