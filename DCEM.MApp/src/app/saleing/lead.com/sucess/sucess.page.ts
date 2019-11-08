import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.page.html',
  styleUrls: ['./sucess.page.scss'],
})
export class SucessPage implements OnInit {

  mod = {
    id: ""
};
constructor(
    private activeRoute: ActivatedRoute
) { }

ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
        if (params['guid'] != null && params['guid'] != undefined) {
            this.mod.id = params['guid'];
        }
    });
}

}
