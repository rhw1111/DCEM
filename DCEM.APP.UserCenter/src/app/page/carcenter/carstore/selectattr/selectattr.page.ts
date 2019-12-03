﻿import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
    selector: 'app-selectattr',
    templateUrl: './selectattr.page.html',
    styleUrls: ['./selectattr.page.scss'],
})
export class SelectattrPage implements OnInit {

    constructor() { }

    ngOnInit() {
        this.init();
    }

    init() {
        var that: SelectattrPage = this;
        $(".dm-footer-svg").click(function () {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).addClass("close");
                $(".dm-footer-model").removeClass("open");
                $(".dm-footer-model").addClass("close");
            }
            else {
                $(this).removeClass("close");
                $(this).addClass("open");
                $(".dm-footer-model").removeClass("close");
                $(".dm-footer-model").addClass("open");
            }
        });
    }
}