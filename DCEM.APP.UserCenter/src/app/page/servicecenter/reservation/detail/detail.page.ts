import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from '../../../../component/typescript/dcem.core';
import sd from 'silly-datetime';
import { OptionSetService } from '../../../../component/typescript/optionset.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
