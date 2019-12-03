import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalController, PopoverController, IonSlides, IonSlide } from '@ionic/angular';
import { AnimationBuilder, Animation } from '@ionic/core';
import { SpeclistComponent } from 'app/page/carcenter/carstore/component/model/speclist/speclist.component';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['../component/scss/main.scss', './index.page.scss'],
})
export class IndexPage implements OnInit {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;

    constructor(
        private _modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
    }


    //弹出规格型号
    async presentSpeclistModal() {

        let animatStart: AnimationBuilder = (AnimationClass: Animation, baseEl: ShadowRoot, position: string): Promise<Animation> => {
            const hostEl = (baseEl.host || baseEl) as HTMLElement;
            const baseAnimation: Animation = new AnimationClass();
            hostEl.style.height = "100%";

            const wrapperEl = baseEl.querySelector('.modal-wrapper') as HTMLElement;  //主区域
            const wrapperAnimation: Animation = new AnimationClass();
            wrapperEl.style.height = "80%";
            wrapperAnimation.fromTo('transform', 'translateY(100%)', 'translateY(20%)');
            wrapperAnimation.addElement(wrapperEl);

            var backdropEl = baseEl.querySelector('ion-backdrop') as HTMLElement;  //背景
            const backdropAnimation: Animation = new AnimationClass();
            backdropAnimation.fromTo('opacity', 0.01, 0.5);
            backdropAnimation.addElement(backdropEl);

            //baseAnimation.fromTo('transform', 'translateY(0%)', 'translateY(0%)');  //主层
            baseAnimation.duration(400);
            baseAnimation.addElement(hostEl);
            baseAnimation.add(wrapperAnimation);
            baseAnimation.add(backdropAnimation);

            return Promise.resolve(baseAnimation);
        }

        let animatEnd: AnimationBuilder = (AnimationClass: Animation, baseEl: ShadowRoot, position: string): Promise<Animation> => {

            const hostEl = (baseEl.host || baseEl) as HTMLElement;
            const baseAnimation: Animation = new AnimationClass();

            const wrapperEl = baseEl.querySelector('.modal-wrapper') as HTMLElement;  //主区域
            const wrapperAnimation: Animation = new AnimationClass();
            wrapperAnimation.fromTo('transform', 'translateY(20%)', 'translateY(100%)');
            wrapperAnimation.addElement(wrapperEl);

            var backdropEl = baseEl.querySelector('ion-backdrop') as HTMLElement;  //背景
            const backdropAnimation: Animation = new AnimationClass();
            backdropAnimation.fromTo('opacity', 0.5, 0);
            backdropAnimation.addElement(backdropEl);

            baseAnimation.fromTo('transform', 'translateY(0%)', 'translateY(100%)');  //主层
            baseAnimation.duration(400);
            baseAnimation.addElement(hostEl);
            baseAnimation.add(wrapperAnimation);
            baseAnimation.add(backdropAnimation);

            return Promise.resolve(baseAnimation);
        }

        const modal = await this._modalCtrl.create({
            component: SpeclistComponent,
            //cssClass: "dm-model",
            enterAnimation: animatStart, //进入动画
            leaveAnimation: animatEnd   //离开动画

        });

        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
        }
    }

}
