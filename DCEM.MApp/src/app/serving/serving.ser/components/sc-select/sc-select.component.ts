import { Component, OnInit } from '@angular/core';
//import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sc-select',
  templateUrl: './sc-select.component.html',
  styleUrls: ['./sc-select.component.scss'],
})
export class ScSelectComponent implements OnInit {

  constructor(
    //private modalCtrl:ModalController
    ) { }

  ngOnInit() {}

  // dismissModal() {
  //   // using the injected ModalController this page
  //   // can "dismiss" itself and optionally pass back data
  //   this.modalCtrl.dismiss({
  //     'dismissed': true
  //   });
  // }
}
