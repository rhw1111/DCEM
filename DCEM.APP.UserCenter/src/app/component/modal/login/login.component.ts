import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public valmsg:any=true;
  public disstatus:any=true;
  public phone:any='';
  constructor() { }

  onSendMsg(){
    this.disstatus=true; 
  }
  ngOnInit() {}

}
