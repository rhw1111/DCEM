
import { Injectable } from '@angular/core';
import sd from 'silly-datetime';

@Injectable({
    providedIn: 'root'
})
/*
日期时间格式化处理
*/
export class Dateformat {

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
            return '--';
        }
    }
}


