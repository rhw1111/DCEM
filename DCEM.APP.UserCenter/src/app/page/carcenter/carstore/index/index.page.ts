import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;

    constructor() {
    }

    ngOnInit() {
        this.init();
    }

    init() {
        //切换事件tab
        console.log("aa");
        var that: IndexPage = this;
        $(".dm-top-nav-tag").find("li").click(function () {
            var index = $(this).index();
            that.mainSlide.slideTo(index);
        })
    }

    tagChange(index) {
        $(".dm-top-nav-tag").find("li").attr("class", "dm-top-nav-tag-text");
        $(".dm-top-nav-tag").find("li").eq(index).addClass("selected");
    }

    //切换事件slides
    async slideChange($event) {
        let index: number = await this.mainSlide.getActiveIndex();
        this.tagChange(index);

    }

}
