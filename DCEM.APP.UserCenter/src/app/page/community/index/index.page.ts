import { Component, ViewChild } from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;

    constructor() {
    }

    ngOnInit() {
        this.init();
    }

    init() {
        //切换事件tab
        var that: IndexPage = this;
        $(".dm-top-nav-tag").find("div").click(function () {
            var index = $(this).parent().index();
            that.mainSlide.slideTo(index);
        })
    }

    tagChange(index) {
        $(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
        $(".dm-top-nav-tag").find("div").eq(index).addClass("selected");
    }

    //切换事件slides
    async slideChange($event) {
        let index: number = await this.mainSlide.getActiveIndex();
        this.tagChange(index);

    }
}
