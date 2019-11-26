import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    constructor() {
        this.init();

    }

    init() {
        $(".dm-top-nav-tag").find("div").click(function () {
            alert("ok");
        })
    }


}
