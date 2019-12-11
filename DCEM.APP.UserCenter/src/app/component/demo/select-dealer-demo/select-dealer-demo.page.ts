import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Page, DCore_Http, DCore_Valid } from "../../typescript/dcem.core";
import { SelectDealerComponent } from "../../modal/select-dealer/select-dealer.component";
import {SelectDealerListComponent} from "../../modal/select-dealer-list/select-dealer-list.component"
@Component({
  selector: 'app-select-dealer-demo',
  templateUrl: './select-dealer-demo.page.html',
  styleUrls: ['./select-dealer-demo.page.scss'],
})
export class SelectDealerDemoPage implements OnInit {

  constructor(
    private _modalCtrl: ModalController
  ) { }
  public model = {
    dealer: {
      id: "",
      name: ""
    }
  }
  ngOnInit() {
  }
  //获取门店
  async provinceModal() {

    const modal = await this._modalCtrl.create({
      component: SelectDealerComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) {
          this.model.dealer.name = data.name;
          this.model.dealer.id = data.id;
        }
      }
    }
  }
  //获取门店
  async provinceListModal() {

    const modal = await this._modalCtrl.create({
      component: SelectDealerListComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) {
          this.model.dealer.name = data.name;
          this.model.dealer.id = data.id;
        }
      }
    }
  }
} 