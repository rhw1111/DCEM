import { Component, ViewChild } from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    @ViewChild(IonSlides, null) ionSlides: IonSlides;

    constructor() {
    }

    ngOnInit() {
        this.init();
    }

    init() {
        //�л��¼�tab
        var that: IndexPage = this;
        $(".dm-top-nav-tag").find("div").click(function () {
            $(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
            $(this).addClass("selected");
            var index = $(this).parent().index();
            that.ionSlides.slideTo(index);
        })
    }

    //�л��¼�slides
    slideChange($event) {
        // var index = this.ionSlides.getActiveIndex;
        var index = this.ionSlides.getActiveIndex();
        console.log(index);
        console.log(index["__zone_symbol__value"]);

    }
}
