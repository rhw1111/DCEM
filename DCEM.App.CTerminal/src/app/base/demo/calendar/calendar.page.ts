import { Component, OnInit } from '@angular/core';


const extra = {
  '2017/07/15': { info: 'Disable', disable: true }
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

for (let key in extra) {
  if (extra.hasOwnProperty(key)) {
    let info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
      extra[+date] = info;
    }
  }
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {


  state: any = {
    en: false,
    date: null,
    show: false,
    pickTime: false,
    now: new Date(),
    type: 'one',
    enterDirection: '',
    rowSize: 'normal',
    showShortcut: false,
    infinite: true,
    defaultValue: undefined,
    minDate: new Date(+now - 5184000000),
    maxDate: new Date(+now + 31536000000),
    onSelect: undefined,
    getDateExtra: date => {
      return extra[+date];
    }
  };
  constructor() { }
 
  ngOnInit() { 
    this.state.show=true;
  }
  triggerConfirm(value) {
    const { startDate } = value;
      
    console.log('onConfirm', startDate);
  }
  triggerCancel() {
    this.state.show = false;
  }
  triggerSelectHasDisableDate(dates) {
    console.warn('onSelectHasDisableDate', dates);
  }
}

