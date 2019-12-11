import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../component/modal/login/login.component'
import { DCore_Http, DCore_Page, DCore_Valid } from '../../../component/typescript/dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { ModalController } from '@ionic/angular';
import { SelectSysareaComponent } from '../../../component/modal/select-sysarea/select-sysarea.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-questionsetting',
  templateUrl: './questionsetting.page.html',
  styleUrls: ['./questionsetting.page.scss'],
})
export class QuestionsettingPage implements OnInit {
  public mod: any = {
    geturl: 'api/question/getquestion',
    addurl: 'api/question/add',
    qualist: {
      Id: '',
      name: '',
      questions: []
    }, question: {
      mcs_questioncode: "",
      mcs_id: "",
      mcs_type: 0,
      mcs_typename: 0,//类型 1 单选；2多选；3编辑
      mcs_content: '',//内容
      mcs_required: 0,//是否必输 1必填；2非必填
      value: '',
      answers: []
    }, answer: {
      mcs_id: "",
      mcs_name: "",
      mcs_answercode: "",
      value: ""
    }
  }
  constructor(private modalCtrl: ModalController,
    private _logininfo: Storage_LoginInfo,
    private route: Router,
    private _page: DCore_Page,
    private _http: DCore_Http,
    private _modalCtrl: ModalController,
    private activeRoute: ActivatedRoute) { }


  getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
  }

  //获取数据
  getList() {
    this._page.loadingShow();
    this._http.post(this.mod.geturl,
      {
        id: this.getQueryVariable("id")
      },
      (res: any) => {
        if (res != null && res.Data !== null) {
          this.OnLoadData(res.Data);
          this._page.loadingHide();
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }

  OnLoadData(data: any) {
    var i = 0;
    this.mod.qualist.name = data.Model.Attributes["mcs_name"];
    this.mod.qualist.Id = data.Model.Id;
    data.Questions.forEach(item => {
      i++;
      this.mod.question = {
        mcs_questioncode: "",
        mcs_id: "",
        mcs_type: 0,
        mcs_typename: 0,//类型 1 单选；2多选；3编辑
        mcs_content: '',//内容
        mcs_required: 0,//是否必输 1必填；2非必填
        answers: []
      }
      this.mod.question.mcs_id = item.Item.Id;
      this.mod.question.mcs_type = item.Item.Attributes["mcs_type"];
      this.mod.question.mcs_questioncode = item.Item.Attributes["mcs_questioncode"];
      this.mod.question.mcs_typename = item.Item.Attributes["mcs_type@OData.Community.Display.V1.FormattedValue"];
      this.mod.question.mcs_content = String(i) + "." + item.Item.Attributes["mcs_content"];
      this.mod.question.mcs_required = item.Item.Attributes["mcs_required"];
      item.Answers.forEach(answer => {
        this.mod.answer = {
          mcs_id: "",
          mcs_name: "",
          mcs_answercode: ""
        };
        this.mod.answer.mcs_id = answer.Id;
        this.mod.answer.mcs_name = answer.Attributes["mcs_name"];
        this.mod.answer.mcs_answercode = answer.Attributes["mcs_answercode"];
        this.mod.question.answers.push(this.mod.answer);
      });
      this.mod.qualist.questions.push(this.mod.question);
    });
  }

  ngOnInit() {
    this.getList();
  }


  onPost() {
    this._page.loadingShow();
    var rep = {
      mcs_deliverychannel: this.getQueryVariable("channer"),
      mcs_questionnairesetting: this.mod.qualist.Id,
      mcs_answername: this._logininfo.GetSystemUserId(),
      model: []
    }
    var valreq = false;
    this.mod.qualist.questions.forEach(item => {
      if (item.mcs_type == 1) {//单选
        var isreq = false;
        var anwer = {
          mcs_name: item.mcs_content,
          mcs_questions: item.mcs_id,
          mcs_answercontentcode: "",
          mcs_answer: "",
        }
        item.answers.forEach(answer => {
          if (answer.mcs_id == item.value) {
            anwer.mcs_answercontentcode = answer.mcs_answercode;
            anwer.mcs_answer = answer.mcs_name;
            isreq = true;
          }
        });
        //判断是否必填
        if (item.mcs_required == 1) {
          if (!isreq) { 
            valreq=true;
            return false;
          }
        }
        rep.model.push(anwer);
      }
      else if (item.mcs_type == 2) {//多选
        var isreq = false;
        item.answers.forEach(answer => {
          if (answer.value) {
            var anwer = {
              mcs_name: item.mcs_content,
              mcs_questions: item.mcs_id,
              mcs_answercontentcode: answer.mcs_answercode,
              mcs_answer: answer.mcs_name,
            }
            rep.model.push(anwer);
            isreq = true;
          }
        });
        //判断是否必填
        if (item.mcs_required == 1) {
          if (!isreq) {
            valreq=true;
            return false;
          }
        }
      }
      else if (item.mcs_type == 3) {//编辑 
        if (item.mcs_required == 1)
          if (item.value == null) {
            valreq=true;
            return false;
          }
        var anwers = {
          mcs_name: item.mcs_content,
          mcs_questions: item.mcs_id,
          mcs_answercontentcode: item.mcs_questioncode,
          mcs_answer: item.value
        }
        rep.model.push(anwers);
      }
    });
    if (valreq) {
      this._page.alert("提交失败", "必填项未填写?");
      this._page.loadingHide();
      return false;
    }
    this._http.post(this.mod.addurl, 
         rep ,
      (res: any) => {
        if (res.result == true) {
          this._page.alert("提交成功", "感谢您的参与！");
          this._page.loadingHide();
          this._page.goBack();
        } else {
          this._page.alert("提交失败", res.description);
          this._page.loadingHide();
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }

}
