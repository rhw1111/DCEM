import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-perfect',
    templateUrl: './perfect.page.html',
    styleUrls: ['./perfect.page.scss'],
})
export class PerfectPage implements OnInit {

    constructor() { }

    ngOnInit() {
        $('::shadow').remove();
    }

}
