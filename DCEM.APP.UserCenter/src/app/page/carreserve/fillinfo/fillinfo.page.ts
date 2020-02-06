import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import * as $ from 'jquery';

@Component({
    selector: 'app-fillinfo',
    templateUrl: './fillinfo.page.html',
    styleUrls: ['./fillinfo.page.scss'],
})
export class FillinfoPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/product/Detail",
        },
        title: "完善预定信息",
        datas: {},
        fullname: this._logininfo.GetName(),
        mobile: this._logininfo.GetPhone()
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.datas = JSON.parse(datastr);
    }
    //焦点事件
    onchange(event, t) {
        var _that = event.target;
        this.validation(_that, t);
    }
    //验证
    validation(target, t) {
        var text = $(target).val().toString();
        if (t == 1) {
            if (text) {
                this.hideValidate(target);
            } else {
                this.showValidate(target);
            }
        } else if (t == 2) {
            var regexp = /^1[3456789]\d{9}$/;
            if (!(regexp.test(text))) {
                this.showValidate(target);
            } else {
                this.hideValidate(target);
            }
        }
    }
    //验证通过
    hideValidate(target) {
        $(target).removeClass("is-danger");
        $(target).next("span").children("svg").hide();
    }
    //验证不通过
    showValidate(target) {
        $(target).addClass("is-danger");
        $(target).next("span").children("svg").show();
    }
    //选择性别
    chooseGender(event) {
        var _that = $(event.target);
        if (!_that.parent().hasClass("active")) {
            _that.parent().siblings("div.label-radio").removeClass("active");
            _that.parent().addClass("active");
        }
    }
    //重新预定
    GoBack() {
        this._page.goBack();
    }
    //确认订单
    BtnSave() {
        this.validation("#fullname", 1);
        this.validation("#mobile", 2);
        if ($("#fullname").hasClass("is-danger") || $("#mobile").hasClass("is-danger")) {
            return false;
        }
        var gender = "";
        $("div.label-radio").each(function (i, item) {
            if ($(item).hasClass("active")) {
                gender = $(item).children("input").val().toString();
            }
        })
        this.model.datas.request.FullName = $("#fullname").val();
        this.model.datas.request.MobilePhone = $("#mobile").val();
        this.model.datas.request.Gender = gender;
        this.model.datas.request.CityOnCard = $("#province").find("option:selected").text();
        this.model.datas.request.ProvinceOnCard = $("#city").find("option:selected").text();
        this._page.goto("/carreserve/confirm", { params: JSON.stringify(this.model.datas) });
    }
}
