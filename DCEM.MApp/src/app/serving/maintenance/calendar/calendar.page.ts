import { Component, OnInit } from '@angular/core';


const extra = { 
};

const now = new Date(); 
 
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
  }
  triggerConfirm(value) {
    const { startDate } = value;
      
    console.log('onConfirm', startDate);
  }
  onClick_3() { 
    this.state.show = true;
    this.state.type = 'one';
  }

  triggerCancel() {
    this.state.show = false;
  }
  triggerSelectHasDisableDate(dates) {
    console.warn('onSelectHasDisableDate', dates);
  }

}
