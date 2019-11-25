import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
    mod = {
        id: ""
    };
    constructor(
        private _activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this._activeRoute.queryParams.subscribe((params: Params) => {
            if (params['guid'] != null && params['guid'] != undefined) {
                this.mod.id = params['guid'];
                console.log(this.mod.id);
            }
        });
  }
}
