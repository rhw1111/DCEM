import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from '../../serving.ser/components/sc-select/sc-select.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor( 
    private _http: DCore_Http,
    private _page: DCore_Page,
    private modelCtr:ModalController) { }

  ngOnInit() {

  }

  async presentModal() {
    const modal = await this.modelCtr.create({
      component: ScSelectComponent
    });
    return await modal.present();
  }
}
