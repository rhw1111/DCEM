import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  public Url:any=null;
  constructor( private activeRoute: ActivatedRoute,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['url'] != null && params['url'] != undefined) {
        this.Url=this.sanitizer.bypassSecurityTrustResourceUrl(params['url']);
      }
    });
  }

}
