import { Component, OnInit } from '@angular/core';
import { DCore_Window,DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor( private _window: DCore_Window,private _page: DCore_Page) {
   
   }

  ngOnInit() {
    
  }
}
