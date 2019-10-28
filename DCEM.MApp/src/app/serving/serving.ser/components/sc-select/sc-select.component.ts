import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sc-select',
  templateUrl: './sc-select.component.html',
  styleUrls: ['./sc-select.component.scss'],
})
export class ScSelectComponent implements OnInit {

  public selectItemValue:any='';
  public seachkey:string='';
  public dataList:any=[];

  constructor(
    private modalCtrl:ModalController
    ) { }

  ngOnInit() {
    //搜索功能实现

  }

  search(){

  }
  
  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }
  //保存所选项
  selectSave(){
    this.modalCtrl.dismiss({
      'id': this.selectItemValue.split(':')[0],
      'name': this.selectItemValue.split(':')[1]
    });
  }
}
