import { Component, OnInit } from '@angular/core';
import sd from 'silly-datetime';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }


    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }

    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
}
