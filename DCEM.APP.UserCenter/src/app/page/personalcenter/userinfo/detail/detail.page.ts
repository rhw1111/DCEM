import { Component, OnInit } from '@angular/core';
import { DCore_Http } from '../../../../component/typescript/dcem.core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor( private _http: DCore_Http){ }

  ngOnInit() {
  }
  public model = { 
    apiUrlDetail: '/api/Originalclue/get', 
    id:"",
    info: { 
        username:"",
        mobile: "",
        clues: "", 
        gender:"",
        mail:"",
        province: "",
        city: "",
        area:"",
        score:"",
        describe:""
    }
};
}
